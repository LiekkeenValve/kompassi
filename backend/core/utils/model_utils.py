import re
from collections import Counter

import phonenumbers
from django.conf import settings
from django.core.validators import RegexValidator
from django.forms import ValidationError
from django.utils.translation import gettext_lazy as _

validate_slug = RegexValidator(
    regex=r"[a-z0-9-]+",
    message="Tekninen nimi saa sisältää vain pieniä kirjaimia, numeroita sekä väliviivoja.",
)

validate_slug_underscore = RegexValidator(
    regex=r"[a-z0-9_]+",
    message="Tekninen nimi saa sisältää vain pieniä kirjaimia, numeroita sekä alaviivoja.",
)


SLUG_FIELD_PARAMS = dict(
    max_length=255,
    unique=True,
    validators=[validate_slug],
    verbose_name="Tekninen nimi",
    help_text='Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja '
    "merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi "
    "muuttaa luomisen jälkeen.",
)
NONUNIQUE_SLUG_FIELD_PARAMS = dict(SLUG_FIELD_PARAMS, unique=False)


def get_slugifier(sep: str = "-"):
    """
    >>> get_slugifier("-")("Foo Bar")
    'foo-bar'
    >>> get_slugifier("_")("Foo Bar")
    'foo_bar'
    """

    if len(sep) != 1:
        raise AssertionError("Separator must be a single character")

    char_map = {
        " ": sep,
        ".": sep,
        "_": sep,
        "à": "a",
        "á": "a",
        "ä": "a",
        "å": "a",
        "è": "e",
        "é": "e",
        "ë": "e",
        "ö": "o",
        "ü": "u",
    }
    forbannad_re = re.compile(f"[^a-z0-9{sep}]", re.UNICODE)
    multisep_re = re.compile(sep + "+", re.UNICODE)

    def _slugify(ustr):
        ustr = ustr.lower()
        ustr = "".join(char_map.get(c, c) for c in ustr)
        ustr = forbannad_re.sub("", ustr)
        ustr = multisep_re.sub(sep, ustr)
        return ustr  # noqa: RET504

    return _slugify


slugify = get_slugifier("-")
slugify_underscore = get_slugifier("_")


def get_previous_and_next(queryset, current):
    if not current.pk:
        return None, None

    # TODO inefficient, done using a list
    signups = list(queryset)

    previous_item = None
    candidate = None

    for next_item in (*signups, None):
        if candidate and candidate.pk == current.pk:
            return previous_item, next_item

        previous_item = candidate
        candidate = next_item

    return None, None


def phone_number_validator(value, region=settings.KOMPASSI_PHONENUMBERS_DEFAULT_REGION):
    """
    Validate the phone number using Google's phonenumbers library.
    """
    exc = _("Invalid phone number.")

    try:
        phone_number = phonenumbers.parse(value, region)
    except phonenumbers.NumberParseException as npe:
        raise ValidationError(exc) from npe
    else:
        if not phonenumbers.is_valid_number(phone_number):
            raise ValidationError(exc)


def format_phone_number(
    value: str,
    region: str = settings.KOMPASSI_PHONENUMBERS_DEFAULT_REGION,
    format: str = settings.KOMPASSI_PHONENUMBERS_DEFAULT_FORMAT,
):
    """
    Formats a phone number or throws phonenumbers.NumberParseException.
    """

    phone_number_format = getattr(phonenumbers.PhoneNumberFormat, format, format)
    phone_number = phonenumbers.parse(value, region)
    return phonenumbers.format_number(phone_number, phone_number_format)


class EnsuranceCompany:
    """
    Ensure unique slugs.

    >>> ensure = EnsuranceCompany()
    >>> ensure("foo"), ensure("bar"), ensure("foo")
    ('foo', 'bar', 'foo-2')
    """

    def __init__(self):
        self.counter: Counter[str] = Counter()

    def __call__(self, slug: str) -> str:
        self.counter[slug] += 1
        return slug if self.counter[slug] == 1 else f"{slug}-{self.counter[slug]}"

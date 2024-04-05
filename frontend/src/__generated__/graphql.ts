/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: string; output: string; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: unknown; output: unknown; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: string; output: string; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: string; output: string; }
};

export type CreateSurvey = {
  __typename?: 'CreateSurvey';
  survey?: Maybe<SurveyType>;
};

export type CreateSurveyInput = {
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type CreateSurveyLanguage = {
  __typename?: 'CreateSurveyLanguage';
  form?: Maybe<FormType>;
};

export type CreateSurveyLanguageInput = {
  copyFrom?: InputMaybe<Scalars['String']['input']>;
  eventSlug: Scalars['String']['input'];
  language: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type CreateSurveyResponse = {
  __typename?: 'CreateSurveyResponse';
  response?: Maybe<ProfileResponseType>;
};

export type CreateSurveyResponseInput = {
  eventSlug: Scalars['String']['input'];
  formData: Scalars['GenericScalar']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  surveySlug: Scalars['String']['input'];
};

export type DeleteSurvey = {
  __typename?: 'DeleteSurvey';
  slug?: Maybe<Scalars['String']['output']>;
};

export type DeleteSurveyDimension = {
  __typename?: 'DeleteSurveyDimension';
  slug?: Maybe<Scalars['String']['output']>;
};

export type DeleteSurveyDimensionInput = {
  dimensionSlug: Scalars['String']['input'];
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type DeleteSurveyDimensionValue = {
  __typename?: 'DeleteSurveyDimensionValue';
  slug?: Maybe<Scalars['String']['output']>;
};

export type DeleteSurveyDimensionValueInput = {
  dimensionSlug: Scalars['String']['input'];
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  valueSlug: Scalars['String']['input'];
};

export type DeleteSurveyInput = {
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type DeleteSurveyLanguage = {
  __typename?: 'DeleteSurveyLanguage';
  language?: Maybe<Scalars['String']['output']>;
};

export type DeleteSurveyLanguageInput = {
  eventSlug: Scalars['String']['input'];
  language: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type DimensionFilterInput = {
  dimension?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DimensionType = {
  __typename?: 'DimensionType';
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  values: Array<DimensionValueType>;
};


export type DimensionTypeTitleArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type DimensionValueType = {
  __typename?: 'DimensionValueType';
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type DimensionValueTypeTitleArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type FormType = {
  __typename?: 'FormType';
  /** A form can be removed if it has no responses. */
  canRemove: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  event: LimitedEventType;
  fields?: Maybe<Scalars['GenericScalar']['output']>;
  language: FormsFormLanguageChoices;
  layout: FormsFormLayoutChoices;
  /** Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi muuttaa luomisen jälkeen. */
  slug: Scalars['String']['output'];
  survey?: Maybe<LimitedSurveyType>;
  thankYouMessage: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type FormTypeFieldsArgs = {
  enrich?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormsEventMetaType = {
  __typename?: 'FormsEventMetaType';
  survey?: Maybe<SurveyType>;
  surveys?: Maybe<Array<SurveyType>>;
};


export type FormsEventMetaTypeSurveyArgs = {
  slug: Scalars['String']['input'];
};


export type FormsEventMetaTypeSurveysArgs = {
  includeInactive?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enumeration. */
export enum FormsFormLanguageChoices {
  /** English */
  En = 'EN',
  /** Finnish */
  Fi = 'FI'
}

/** An enumeration. */
export enum FormsFormLayoutChoices {
  /** Horizontal */
  Horizontal = 'HORIZONTAL',
  /** Vertical */
  Vertical = 'VERTICAL'
}

export type FormsProfileMetaType = {
  __typename?: 'FormsProfileMetaType';
  /** Returns a single response submitted by the current user. */
  response?: Maybe<ProfileResponseType>;
  /** Returns all responses submitted by the current user. */
  responses: Array<ProfileResponseType>;
};


export type FormsProfileMetaTypeResponseArgs = {
  id: Scalars['String']['input'];
};

/** An enumeration. */
export enum FormsSurveyAnonymityChoices {
  /** Hard anonymous */
  Hard = 'HARD',
  /** Name and email shown to survey owner if responded logged-in */
  NameAndEmail = 'NAME_AND_EMAIL',
  /** Soft anonymous (linked to user account but not shown to survey owner) */
  Soft = 'SOFT'
}

export type FullEventType = {
  __typename?: 'FullEventType';
  forms?: Maybe<FormsEventMetaType>;
  name: Scalars['String']['output'];
  program?: Maybe<ProgramV2EventMetaType>;
  /** Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi muuttaa luomisen jälkeen. */
  slug: Scalars['String']['output'];
};

export type FullResponseType = {
  __typename?: 'FullResponseType';
  /** Returns the dimensions of the response as a dict of dimension slug -> list of dimension value slugs. If the response is not related to a survey, there will be no dimensions and an empty dict will always be returned. Using this field is more efficient than querying the dimensions field on the response, as the dimensions are cached on the response object. */
  cachedDimensions?: Maybe<Scalars['GenericScalar']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /**
   *
   *         Returns the user who submitted the response. If response is to an anonymous survey,
   *         this information will not be available.
   *
   */
  createdBy?: Maybe<LimitedUserType>;
  dimensions?: Maybe<Array<ResponseDimensionValueType>>;
  form: FormType;
  formData: Scalars['JSONString']['output'];
  id: Scalars['UUID']['output'];
  /** Language code of the form used to submit this response. */
  language: Scalars['String']['output'];
  /** Sequence number of this response within the use case (eg. survey). */
  sequenceNumber: Scalars['Int']['output'];
  values?: Maybe<Scalars['GenericScalar']['output']>;
};


export type FullResponseTypeCachedDimensionsArgs = {
  keyDimensionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FullResponseTypeDimensionsArgs = {
  keyDimensionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FullResponseTypeValuesArgs = {
  keyFieldsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InitFileUploadInput = {
  fileType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
};

export type InitFileUploadResponse = {
  __typename?: 'InitFileUploadResponse';
  fileUrl?: Maybe<Scalars['String']['output']>;
  uploadUrl?: Maybe<Scalars['String']['output']>;
};

export type LimitedEventType = {
  __typename?: 'LimitedEventType';
  name: Scalars['String']['output'];
  /** Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi muuttaa luomisen jälkeen. */
  slug: Scalars['String']['output'];
};

export type LimitedResponseType = {
  __typename?: 'LimitedResponseType';
  /** Returns the dimensions of the response as a dict of dimension slug -> list of dimension value slugs. If the response is not related to a survey, there will be no dimensions and an empty dict will always be returned. Using this field is more efficient than querying the dimensions field on the response, as the dimensions are cached on the response object. */
  cachedDimensions?: Maybe<Scalars['GenericScalar']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /**
   *
   *         Returns the user who submitted the response. If response is to an anonymous survey,
   *         this information will not be available.
   *
   */
  createdBy?: Maybe<LimitedUserType>;
  formData: Scalars['JSONString']['output'];
  id: Scalars['UUID']['output'];
  /** Language code of the form used to submit this response. */
  language: Scalars['String']['output'];
  /** Sequence number of this response within the use case (eg. survey). */
  sequenceNumber: Scalars['Int']['output'];
  values?: Maybe<Scalars['GenericScalar']['output']>;
};


export type LimitedResponseTypeCachedDimensionsArgs = {
  keyDimensionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LimitedResponseTypeValuesArgs = {
  keyFieldsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LimitedSurveyType = {
  __typename?: 'LimitedSurveyType';
  /** The form will be available from this date onwards. If not set, the form will not be available. */
  activeFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The form will be available until this date. If not set, the form will be available indefinitely provided that active_from is set and has passed. */
  activeUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Hard anonymous: responses are not linked to user accounts and IP addresses are not recorded. Soft anonymous: responses are linked to user accounts but not shown to survey owners. Name and email: responses are linked to user accounts and shown to survey owners. */
  anonymity: FormsSurveyAnonymityChoices;
  isActive: Scalars['Boolean']['output'];
  loginRequired: Scalars['Boolean']['output'];
  /** Maximum number of responses per user. 0 = unlimited. Note that if login_required is not set, this only takes effect for logged in users.Has no effect if the survey is hard anonymous. */
  maxResponsesPerUser: Scalars['Int']['output'];
  /** Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi muuttaa luomisen jälkeen. */
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type LimitedSurveyTypeTitleArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type LimitedUserType = {
  __typename?: 'LimitedUserType';
  /** User's full name. */
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSurvey?: Maybe<CreateSurvey>;
  createSurveyLanguage?: Maybe<CreateSurveyLanguage>;
  createSurveyResponse?: Maybe<CreateSurveyResponse>;
  deleteSurvey?: Maybe<DeleteSurvey>;
  deleteSurveyDimension?: Maybe<DeleteSurveyDimension>;
  deleteSurveyDimensionValue?: Maybe<DeleteSurveyDimensionValue>;
  deleteSurveyLanguage?: Maybe<DeleteSurveyLanguage>;
  initFileUpload?: Maybe<InitFileUploadResponse>;
  putSurveyDimension?: Maybe<PutSurveyDimension>;
  putSurveyDimensionValue?: Maybe<PutSurveyDimensionValue>;
  updateResponseDimensions?: Maybe<UpdateResponseDimensions>;
  updateSurvey?: Maybe<UpdateSurvey>;
  updateSurveyLanguage?: Maybe<UpdateSurveyLanguage>;
};


export type MutationCreateSurveyArgs = {
  input: CreateSurveyInput;
};


export type MutationCreateSurveyLanguageArgs = {
  input: CreateSurveyLanguageInput;
};


export type MutationCreateSurveyResponseArgs = {
  input: CreateSurveyResponseInput;
};


export type MutationDeleteSurveyArgs = {
  input: DeleteSurveyInput;
};


export type MutationDeleteSurveyDimensionArgs = {
  input: DeleteSurveyDimensionInput;
};


export type MutationDeleteSurveyDimensionValueArgs = {
  input: DeleteSurveyDimensionValueInput;
};


export type MutationDeleteSurveyLanguageArgs = {
  input: DeleteSurveyLanguageInput;
};


export type MutationInitFileUploadArgs = {
  input: InitFileUploadInput;
};


export type MutationPutSurveyDimensionArgs = {
  input: PutSurveyDimensionInput;
};


export type MutationPutSurveyDimensionValueArgs = {
  input: PutSurveyDimensionValueInput;
};


export type MutationUpdateResponseDimensionsArgs = {
  input: UpdateResponseDimensionsInput;
};


export type MutationUpdateSurveyArgs = {
  input: UpdateSurveyInput;
};


export type MutationUpdateSurveyLanguageArgs = {
  input: UpdateSurveyLanguageInput;
};

export type OfferFormType = {
  __typename?: 'OfferFormType';
  form?: Maybe<FormType>;
  isActive: Scalars['Boolean']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  /** Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi muuttaa luomisen jälkeen. */
  slug: Scalars['String']['output'];
};


export type OfferFormTypeFormArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type OfferFormTypeShortDescriptionArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileResponseType = {
  __typename?: 'ProfileResponseType';
  /** Returns the dimensions of the response as a dict of dimension slug -> list of dimension value slugs. If the response is not related to a survey, there will be no dimensions and an empty dict will always be returned. Using this field is more efficient than querying the dimensions field on the response, as the dimensions are cached on the response object. The respondent will only see values of dimensions that are designated as being shown to the respondent. */
  cachedDimensions?: Maybe<Scalars['GenericScalar']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /**
   *
   *         Returns the user who submitted the response. If response is to an anonymous survey,
   *         this information will not be available.
   *
   */
  createdBy?: Maybe<LimitedUserType>;
  dimensions?: Maybe<Array<ResponseDimensionValueType>>;
  form: FormType;
  formData: Scalars['JSONString']['output'];
  id: Scalars['UUID']['output'];
  /** Language code of the form used to submit this response. */
  language: Scalars['String']['output'];
  values?: Maybe<Scalars['GenericScalar']['output']>;
};


export type ProfileResponseTypeCachedDimensionsArgs = {
  keyDimensionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProfileResponseTypeDimensionsArgs = {
  keyDimensionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProfileResponseTypeValuesArgs = {
  keyFieldsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  displayName?: Maybe<Scalars['String']['output']>;
  /** Email is the primary means of contact for event-related matters. */
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** Namespace for queries related to forms and the current user. */
  forms: FormsProfileMetaType;
  lastName?: Maybe<Scalars['String']['output']>;
  /** If you go by a nick name or handle that you want printed in your badge and programme details, enter it here. */
  nick: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type ProgramDimensionValueType = {
  __typename?: 'ProgramDimensionValueType';
  dimension: DimensionType;
  value: DimensionValueType;
};

export type ProgramType = {
  __typename?: 'ProgramType';
  cachedDimensions?: Maybe<Scalars['GenericScalar']['output']>;
  cachedHosts: Scalars['String']['output'];
  dimensions: Array<ProgramDimensionValueType>;
  scheduleItems: Array<ScheduleItemType>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ProgramV2EventMetaType = {
  __typename?: 'ProgramV2EventMetaType';
  dimensions?: Maybe<Array<DimensionType>>;
  offerForm?: Maybe<OfferFormType>;
  offerForms?: Maybe<Array<OfferFormType>>;
  programs?: Maybe<Array<ProgramType>>;
  /** If checked, the user will not be able to choose an offer form. Instead they will be redirected to the default offer form. */
  skipOfferFormSelection: Scalars['Boolean']['output'];
};


export type ProgramV2EventMetaTypeOfferFormArgs = {
  slug: Scalars['String']['input'];
};


export type ProgramV2EventMetaTypeOfferFormsArgs = {
  includeInactive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProgramV2EventMetaTypeProgramsArgs = {
  filters?: InputMaybe<Array<InputMaybe<DimensionFilterInput>>>;
};

export type PutSurveyDimension = {
  __typename?: 'PutSurveyDimension';
  dimension?: Maybe<SurveyDimensionType>;
};

export type PutSurveyDimensionInput = {
  /** If set, update existing; otherwise, create new */
  dimensionSlug?: InputMaybe<Scalars['String']['input']>;
  eventSlug: Scalars['String']['input'];
  formData: Scalars['GenericScalar']['input'];
  surveySlug: Scalars['String']['input'];
};

export type PutSurveyDimensionValue = {
  __typename?: 'PutSurveyDimensionValue';
  value?: Maybe<SurveyDimensionValueType>;
};

export type PutSurveyDimensionValueInput = {
  dimensionSlug: Scalars['String']['input'];
  eventSlug: Scalars['String']['input'];
  formData: Scalars['GenericScalar']['input'];
  surveySlug: Scalars['String']['input'];
  /** If set, update existing; otherwise, create new */
  valueSlug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<FullEventType>;
  profile?: Maybe<ProfileType>;
};


export type QueryEventArgs = {
  slug: Scalars['String']['input'];
};

export type ResponseDimensionValueType = {
  __typename?: 'ResponseDimensionValueType';
  dimension: SurveyDimensionType;
  value: SurveyDimensionValueType;
};

export type ScheduleItemType = {
  __typename?: 'ScheduleItemType';
  endTime: Scalars['DateTime']['output'];
  endTimeUnixSeconds: Scalars['Int']['output'];
  lengthMinutes: Scalars['Int']['output'];
  startTime: Scalars['DateTime']['output'];
  startTimeUnixSeconds: Scalars['Int']['output'];
  subtitle: Scalars['String']['output'];
};

export type SurveyDimensionType = {
  __typename?: 'SurveyDimensionType';
  canRemove: Scalars['Boolean']['output'];
  /** Key dimensions are shown in the survey responses list. */
  isKeyDimension: Scalars['Boolean']['output'];
  /** Multi-value dimensions allow multiple values to be selected. NOTE: In the database, all dimensions are multi-value, so this is just a UI hint. */
  isMultiValue: Scalars['Boolean']['output'];
  /** If set, the respondent will see the value of the dimension in the profile survey responses list. */
  isShownToRespondent: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  values: Array<SurveyDimensionValueType>;
};


export type SurveyDimensionTypeTitleArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyDimensionValueType = {
  __typename?: 'SurveyDimensionValueType';
  canRemove: Scalars['Boolean']['output'];
  color: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type SurveyDimensionValueTypeTitleArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyType = {
  __typename?: 'SurveyType';
  /** The form will be available from this date onwards. If not set, the form will not be available. */
  activeFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The form will be available until this date. If not set, the form will be available indefinitely provided that active_from is set and has passed. */
  activeUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Hard anonymous: responses are not linked to user accounts and IP addresses are not recorded. Soft anonymous: responses are linked to user accounts but not shown to survey owners. Name and email: responses are linked to user accounts and shown to survey owners. */
  anonymity: FormsSurveyAnonymityChoices;
  /** Surveys that have language versions cannot be removed. Having language versions is also a prerequisite for a survey to have responses. */
  canRemove: Scalars['Boolean']['output'];
  /** Returns the number of responses to this survey regardless of language version used. Authorization required. */
  countResponses: Scalars['Int']['output'];
  /** Returns the number of responses to this survey by the current user. */
  countResponsesByCurrentUser: Scalars['Int']['output'];
  dimensions?: Maybe<Array<SurveyDimensionType>>;
  /** A survey's language versions may have differing fields. This field presents them combined as a single list of fields. If a language is specified, that language is used as the base for the combined fields. Order of fields not present in the base language is not guaranteed. */
  fields?: Maybe<Scalars['GenericScalar']['output']>;
  /** Will attempt to give the form in the requested language, falling back to another language if that language is not available. */
  form?: Maybe<FormType>;
  isActive: Scalars['Boolean']['output'];
  /** Key fields will be shown in the response list. */
  keyFields: Array<Scalars['String']['output']>;
  /** The form will be available in these languages. Each language can have its own set of fields. There must be exactly one form per supported language. */
  languages: Array<FormType>;
  loginRequired: Scalars['Boolean']['output'];
  /** Maximum number of responses per user. 0 = unlimited. Note that if login_required is not set, this only takes effect for logged in users.Has no effect if the survey is hard anonymous. */
  maxResponsesPerUser: Scalars['Int']['output'];
  response?: Maybe<FullResponseType>;
  /** Returns the responses to this survey regardless of language version used. Authorization required. */
  responses?: Maybe<Array<LimitedResponseType>>;
  /** Tekninen nimi eli "slug" näkyy URL-osoitteissa. Sallittuja merkkejä ovat pienet kirjaimet, numerot ja väliviiva. Teknistä nimeä ei voi muuttaa luomisen jälkeen. */
  slug: Scalars['String']['output'];
  /** Returns a summary of responses to this survey. If a language is specified, that language is used as the base for the combined fields. Order of fields not present in the base language is not guaranteed. Authorization required. */
  summary?: Maybe<Scalars['GenericScalar']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SurveyTypeCountResponsesArgs = {
  filters?: InputMaybe<Array<InputMaybe<DimensionFilterInput>>>;
};


export type SurveyTypeDimensionsArgs = {
  keyDimensionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SurveyTypeFieldsArgs = {
  keyFieldsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type SurveyTypeFormArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type SurveyTypeResponseArgs = {
  id: Scalars['String']['input'];
};


export type SurveyTypeResponsesArgs = {
  filters?: InputMaybe<Array<InputMaybe<DimensionFilterInput>>>;
};


export type SurveyTypeSummaryArgs = {
  filters?: InputMaybe<Array<InputMaybe<DimensionFilterInput>>>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type SurveyTypeTitleArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateResponseDimensions = {
  __typename?: 'UpdateResponseDimensions';
  response?: Maybe<FullResponseType>;
};

export type UpdateResponseDimensionsInput = {
  eventSlug: Scalars['String']['input'];
  formData: Scalars['GenericScalar']['input'];
  responseId: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type UpdateSurvey = {
  __typename?: 'UpdateSurvey';
  survey?: Maybe<SurveyType>;
};

export type UpdateSurveyInput = {
  eventSlug: Scalars['String']['input'];
  formData: Scalars['GenericScalar']['input'];
  surveySlug: Scalars['String']['input'];
};

export type UpdateSurveyLanguage = {
  __typename?: 'UpdateSurveyLanguage';
  survey?: Maybe<SurveyType>;
};

export type UpdateSurveyLanguageInput = {
  eventSlug: Scalars['String']['input'];
  formData: Scalars['GenericScalar']['input'];
  language: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
};

export type NewProgramQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  formSlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type NewProgramQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, program?: { __typename?: 'ProgramV2EventMetaType', skipOfferFormSelection: boolean, offerForm?: { __typename?: 'OfferFormType', form?: { __typename?: 'FormType', title: string, description: string, fields?: unknown | null, layout: FormsFormLayoutChoices } | null } | null } | null } | null };

export type NewProgramFormSelectionQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type NewProgramFormSelectionQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, slug: string, program?: { __typename?: 'ProgramV2EventMetaType', skipOfferFormSelection: boolean, offerForms?: Array<{ __typename?: 'OfferFormType', slug: string, shortDescription?: string | null, form?: { __typename?: 'FormType', title: string, slug: string } | null }> | null } | null } | null };

export type CreateSurveyResponseMutationVariables = Exact<{
  input: CreateSurveyResponseInput;
}>;


export type CreateSurveyResponseMutation = { __typename?: 'Mutation', createSurveyResponse?: { __typename?: 'CreateSurveyResponse', response?: { __typename?: 'ProfileResponseType', id: string } | null } | null };

export type InitFileUploadMutationMutationVariables = Exact<{
  input: InitFileUploadInput;
}>;


export type InitFileUploadMutationMutation = { __typename?: 'Mutation', initFileUpload?: { __typename?: 'InitFileUploadResponse', uploadUrl?: string | null, fileUrl?: string | null } | null };

export type PutSurveyDimensionMutationVariables = Exact<{
  input: PutSurveyDimensionInput;
}>;


export type PutSurveyDimensionMutation = { __typename?: 'Mutation', putSurveyDimension?: { __typename?: 'PutSurveyDimension', dimension?: { __typename?: 'SurveyDimensionType', slug: string } | null } | null };

export type DeleteSurveyDimensionMutationVariables = Exact<{
  input: DeleteSurveyDimensionInput;
}>;


export type DeleteSurveyDimensionMutation = { __typename?: 'Mutation', deleteSurveyDimension?: { __typename?: 'DeleteSurveyDimension', slug?: string | null } | null };

export type PutSurveyDimensionValueMutationVariables = Exact<{
  input: PutSurveyDimensionValueInput;
}>;


export type PutSurveyDimensionValueMutation = { __typename?: 'Mutation', putSurveyDimensionValue?: { __typename?: 'PutSurveyDimensionValue', value?: { __typename?: 'SurveyDimensionValueType', slug: string } | null } | null };

export type DeleteSurveyDimensionValueMutationVariables = Exact<{
  input: DeleteSurveyDimensionValueInput;
}>;


export type DeleteSurveyDimensionValueMutation = { __typename?: 'Mutation', deleteSurveyDimensionValue?: { __typename?: 'DeleteSurveyDimensionValue', slug?: string | null } | null };

export type ValueFieldsFragment = { __typename?: 'SurveyDimensionValueType', slug: string, color: string, canRemove: boolean, title?: string | null, titleFi?: string | null, titleEn?: string | null };

export type DimensionRowGroupFragment = { __typename?: 'SurveyDimensionType', slug: string, canRemove: boolean, title?: string | null, isKeyDimension: boolean, isMultiValue: boolean, isShownToRespondent: boolean, titleFi?: string | null, titleEn?: string | null, values: Array<{ __typename?: 'SurveyDimensionValueType', slug: string, color: string, canRemove: boolean, title?: string | null, titleFi?: string | null, titleEn?: string | null }> };

export type DimensionsListQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type DimensionsListQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', slug: string, title?: string | null, canRemove: boolean, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }>, dimensions?: Array<{ __typename?: 'SurveyDimensionType', slug: string, canRemove: boolean, title?: string | null, isKeyDimension: boolean, isMultiValue: boolean, isShownToRespondent: boolean, titleFi?: string | null, titleEn?: string | null, values: Array<{ __typename?: 'SurveyDimensionValueType', slug: string, color: string, canRemove: boolean, title?: string | null, titleFi?: string | null, titleEn?: string | null }> }> | null } | null } | null } | null };

export type UpdateSurveyLanguageMutationMutationVariables = Exact<{
  input: UpdateSurveyLanguageInput;
}>;


export type UpdateSurveyLanguageMutationMutation = { __typename?: 'Mutation', updateSurveyLanguage?: { __typename?: 'UpdateSurveyLanguage', survey?: { __typename?: 'SurveyType', slug: string } | null } | null };

export type DeleteSurveyLanguageMutationVariables = Exact<{
  input: DeleteSurveyLanguageInput;
}>;


export type DeleteSurveyLanguageMutation = { __typename?: 'Mutation', deleteSurveyLanguage?: { __typename?: 'DeleteSurveyLanguage', language?: string | null } | null };

export type UpdateSurveyFieldsLanguageMutationMutationVariables = Exact<{
  input: UpdateSurveyLanguageInput;
}>;


export type UpdateSurveyFieldsLanguageMutationMutation = { __typename?: 'Mutation', updateSurveyLanguage?: { __typename?: 'UpdateSurveyLanguage', survey?: { __typename?: 'SurveyType', slug: string } | null } | null };

export type EditSurveyFieldsPageFragment = { __typename?: 'SurveyType', slug: string, title?: string | null, canRemove: boolean, form?: { __typename?: 'FormType', title: string, language: FormsFormLanguageChoices, fields?: unknown | null, canRemove: boolean } | null, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }> };

export type EditSurveyFieldsPageQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  language: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditSurveyFieldsPageQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', slug: string, title?: string | null, canRemove: boolean, form?: { __typename?: 'FormType', title: string, language: FormsFormLanguageChoices, fields?: unknown | null, canRemove: boolean } | null, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }> } | null } | null } | null };

export type EditSurveyLanguagePageFragment = { __typename?: 'SurveyType', slug: string, title?: string | null, canRemove: boolean, form?: { __typename?: 'FormType', title: string, language: FormsFormLanguageChoices, description: string, thankYouMessage: string, fields?: unknown | null, canRemove: boolean } | null, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }> };

export type EditSurveyLanguagePageQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  language: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditSurveyLanguagePageQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', slug: string, title?: string | null, canRemove: boolean, form?: { __typename?: 'FormType', title: string, language: FormsFormLanguageChoices, description: string, thankYouMessage: string, fields?: unknown | null, canRemove: boolean } | null, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }> } | null } | null } | null };

export type CreateSurveyLanguageMutationVariables = Exact<{
  input: CreateSurveyLanguageInput;
}>;


export type CreateSurveyLanguageMutation = { __typename?: 'Mutation', createSurveyLanguage?: { __typename?: 'CreateSurveyLanguage', form?: { __typename?: 'FormType', language: FormsFormLanguageChoices } | null } | null };

export type UpdateSurveyMutationMutationVariables = Exact<{
  input: UpdateSurveyInput;
}>;


export type UpdateSurveyMutationMutation = { __typename?: 'Mutation', updateSurvey?: { __typename?: 'UpdateSurvey', survey?: { __typename?: 'SurveyType', slug: string } | null } | null };

export type DeleteSurveyMutationMutationVariables = Exact<{
  input: DeleteSurveyInput;
}>;


export type DeleteSurveyMutationMutation = { __typename?: 'Mutation', deleteSurvey?: { __typename?: 'DeleteSurvey', slug?: string | null } | null };

export type EditSurveyPageFragment = { __typename?: 'SurveyType', slug: string, title?: string | null, loginRequired: boolean, anonymity: FormsSurveyAnonymityChoices, maxResponsesPerUser: number, countResponsesByCurrentUser: number, activeFrom?: string | null, activeUntil?: string | null, canRemove: boolean, languages: Array<{ __typename?: 'FormType', title: string, language: FormsFormLanguageChoices, canRemove: boolean }> };

export type EditSurveyPageQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditSurveyPageQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', slug: string, title?: string | null, loginRequired: boolean, anonymity: FormsSurveyAnonymityChoices, maxResponsesPerUser: number, countResponsesByCurrentUser: number, activeFrom?: string | null, activeUntil?: string | null, canRemove: boolean, languages: Array<{ __typename?: 'FormType', title: string, language: FormsFormLanguageChoices, canRemove: boolean }> } | null } | null } | null };

export type SurveyPageQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type SurveyPageQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', loginRequired: boolean, anonymity: FormsSurveyAnonymityChoices, maxResponsesPerUser: number, countResponsesByCurrentUser: number, form?: { __typename?: 'FormType', title: string, description: string, fields?: unknown | null, layout: FormsFormLayoutChoices } | null } | null } | null } | null };

export type UpdateResponseDimensionsMutationVariables = Exact<{
  input: UpdateResponseDimensionsInput;
}>;


export type UpdateResponseDimensionsMutation = { __typename?: 'Mutation', updateResponseDimensions?: { __typename?: 'UpdateResponseDimensions', response?: { __typename?: 'FullResponseType', id: string } | null } | null };

export type SurveyResponseDetailQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  responseId: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type SurveyResponseDetailQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', title?: string | null, slug: string, anonymity: FormsSurveyAnonymityChoices, dimensions?: Array<{ __typename?: 'SurveyDimensionType', title?: string | null, slug: string, isMultiValue: boolean, values: Array<{ __typename?: 'SurveyDimensionValueType', title?: string | null, slug: string, color: string }> }> | null, response?: { __typename?: 'FullResponseType', id: string, sequenceNumber: number, createdAt: string, language: string, values?: unknown | null, cachedDimensions?: unknown | null, createdBy?: { __typename?: 'LimitedUserType', displayName: string, email: string } | null, form: { __typename?: 'FormType', fields?: unknown | null, layout: FormsFormLayoutChoices } } | null } | null } | null } | null };

export type SurveyResponseFragment = { __typename?: 'LimitedResponseType', id: string, sequenceNumber: number, createdAt: string, language: string, values?: unknown | null, cachedDimensions?: unknown | null, createdBy?: { __typename?: 'LimitedUserType', displayName: string } | null };

export type FormResponsesQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<DimensionFilterInput> | DimensionFilterInput>;
}>;


export type FormResponsesQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', title?: string | null, anonymity: FormsSurveyAnonymityChoices, fields?: unknown | null, countResponses: number, dimensions?: Array<{ __typename?: 'SurveyDimensionType', slug: string, title?: string | null, isKeyDimension: boolean, values: Array<{ __typename?: 'SurveyDimensionValueType', slug: string, title?: string | null, color: string }> }> | null, responses?: Array<{ __typename?: 'LimitedResponseType', id: string, sequenceNumber: number, createdAt: string, language: string, values?: unknown | null, cachedDimensions?: unknown | null, createdBy?: { __typename?: 'LimitedUserType', displayName: string } | null }> | null } | null } | null } | null };

export type SurveySummaryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<DimensionFilterInput> | DimensionFilterInput>;
}>;


export type SurveySummaryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', title?: string | null, fields?: unknown | null, summary?: unknown | null, countResponses: number, countFilteredResponses: number, dimensions?: Array<{ __typename?: 'SurveyDimensionType', slug: string, title?: string | null, values: Array<{ __typename?: 'SurveyDimensionValueType', slug: string, title?: string | null }> }> | null } | null } | null } | null };

export type SurveyThankYouPageQueryQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  surveySlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type SurveyThankYouPageQueryQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', survey?: { __typename?: 'SurveyType', form?: { __typename?: 'FormType', title: string, thankYouMessage: string } | null } | null } | null } | null };

export type CreateSurveyMutationVariables = Exact<{
  input: CreateSurveyInput;
}>;


export type CreateSurveyMutation = { __typename?: 'Mutation', createSurvey?: { __typename?: 'CreateSurvey', survey?: { __typename?: 'SurveyType', slug: string } | null } | null };

export type SurveyFragment = { __typename?: 'SurveyType', slug: string, title?: string | null, isActive: boolean, activeFrom?: string | null, activeUntil?: string | null, countResponses: number, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }> };

export type SurveysQueryVariables = Exact<{
  eventSlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type SurveysQuery = { __typename?: 'Query', event?: { __typename?: 'FullEventType', name: string, forms?: { __typename?: 'FormsEventMetaType', surveys?: Array<{ __typename?: 'SurveyType', slug: string, title?: string | null, isActive: boolean, activeFrom?: string | null, activeUntil?: string | null, countResponses: number, languages: Array<{ __typename?: 'FormType', language: FormsFormLanguageChoices }> }> | null } | null } | null };

export type ProfileSurveyResponsePageQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  responseId: Scalars['String']['input'];
}>;


export type ProfileSurveyResponsePageQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileType', forms: { __typename?: 'FormsProfileMetaType', response?: { __typename?: 'ProfileResponseType', id: string, createdAt: string, values?: unknown | null, dimensions?: Array<{ __typename?: 'ResponseDimensionValueType', dimension: { __typename?: 'SurveyDimensionType', slug: string, title?: string | null }, value: { __typename?: 'SurveyDimensionValueType', slug: string, title?: string | null, color: string } }> | null, form: { __typename?: 'FormType', slug: string, title: string, language: FormsFormLanguageChoices, fields?: unknown | null, layout: FormsFormLayoutChoices, event: { __typename?: 'LimitedEventType', slug: string, name: string }, survey?: { __typename?: 'LimitedSurveyType', anonymity: FormsSurveyAnonymityChoices } | null } } | null } } | null };

export type ProfileResponsesTableRowFragment = { __typename?: 'ProfileResponseType', id: string, createdAt: string, dimensions?: Array<{ __typename?: 'ResponseDimensionValueType', dimension: { __typename?: 'SurveyDimensionType', slug: string, title?: string | null }, value: { __typename?: 'SurveyDimensionValueType', slug: string, title?: string | null, color: string } }> | null, form: { __typename?: 'FormType', slug: string, title: string, event: { __typename?: 'LimitedEventType', slug: string, name: string } } };

export type OwnFormResponsesQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type OwnFormResponsesQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileType', forms: { __typename?: 'FormsProfileMetaType', responses: Array<{ __typename?: 'ProfileResponseType', id: string, createdAt: string, dimensions?: Array<{ __typename?: 'ResponseDimensionValueType', dimension: { __typename?: 'SurveyDimensionType', slug: string, title?: string | null }, value: { __typename?: 'SurveyDimensionValueType', slug: string, title?: string | null, color: string } }> | null, form: { __typename?: 'FormType', slug: string, title: string, event: { __typename?: 'LimitedEventType', slug: string, name: string } } }> } } | null };

export type DimensionBadgeFragment = { __typename?: 'ResponseDimensionValueType', dimension: { __typename?: 'SurveyDimensionType', slug: string, title?: string | null }, value: { __typename?: 'SurveyDimensionValueType', slug: string, title?: string | null, color: string } };

export const ValueFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ValueFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyDimensionValueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleFi"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"fi","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleEn"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"en","block":false}}]}]}}]} as unknown as DocumentNode<ValueFieldsFragment, unknown>;
export const DimensionRowGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DimensionRowGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyDimensionType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isKeyDimension"}},{"kind":"Field","name":{"kind":"Name","value":"isMultiValue"}},{"kind":"Field","name":{"kind":"Name","value":"isShownToRespondent"}},{"kind":"Field","alias":{"kind":"Name","value":"titleFi"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"fi","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleEn"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"en","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ValueFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ValueFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyDimensionValueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleFi"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"fi","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleEn"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"en","block":false}}]}]}}]} as unknown as DocumentNode<DimensionRowGroupFragment, unknown>;
export const EditSurveyFieldsPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditSurveyFieldsPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enrich"},"value":{"kind":"BooleanValue","value":false}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<EditSurveyFieldsPageFragment, unknown>;
export const EditSurveyLanguagePageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditSurveyLanguagePage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thankYouMessage"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<EditSurveyLanguagePageFragment, unknown>;
export const EditSurveyPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditSurveyPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"loginRequired"}},{"kind":"Field","name":{"kind":"Name","value":"anonymity"}},{"kind":"Field","name":{"kind":"Name","value":"maxResponsesPerUser"}},{"kind":"Field","name":{"kind":"Name","value":"countResponsesByCurrentUser"}},{"kind":"Field","name":{"kind":"Name","value":"activeFrom"}},{"kind":"Field","name":{"kind":"Name","value":"activeUntil"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}}]}}]}}]} as unknown as DocumentNode<EditSurveyPageFragment, unknown>;
export const SurveyResponseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SurveyResponse"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LimitedResponseType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyFieldsOnly"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"cachedDimensions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyDimensionsOnly"},"value":{"kind":"BooleanValue","value":true}}]}]}}]} as unknown as DocumentNode<SurveyResponseFragment, unknown>;
export const SurveyFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Survey"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"activeFrom"}},{"kind":"Field","name":{"kind":"Name","value":"activeUntil"}},{"kind":"Field","name":{"kind":"Name","value":"countResponses"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<SurveyFragment, unknown>;
export const ProfileResponsesTableRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileResponsesTableRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileResponseType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyDimensionsOnly"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileResponsesTableRowFragment, unknown>;
export const DimensionBadgeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DimensionBadge"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponseDimensionValueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<DimensionBadgeFragment, unknown>;
export const NewProgramQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewProgramQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"formSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skipOfferFormSelection"}},{"kind":"Field","name":{"kind":"Name","value":"offerForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"formSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewProgramQueryQuery, NewProgramQueryQueryVariables>;
export const NewProgramFormSelectionQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewProgramFormSelectionQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skipOfferFormSelection"}},{"kind":"Field","name":{"kind":"Name","value":"offerForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewProgramFormSelectionQueryQuery, NewProgramFormSelectionQueryQueryVariables>;
export const CreateSurveyResponseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSurveyResponse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSurveyResponseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSurveyResponse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSurveyResponseMutation, CreateSurveyResponseMutationVariables>;
export const InitFileUploadMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitFileUploadMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InitFileUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initFileUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}}]}}]}}]} as unknown as DocumentNode<InitFileUploadMutationMutation, InitFileUploadMutationMutationVariables>;
export const PutSurveyDimensionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PutSurveyDimension"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PutSurveyDimensionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"putSurveyDimension"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<PutSurveyDimensionMutation, PutSurveyDimensionMutationVariables>;
export const DeleteSurveyDimensionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSurveyDimension"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSurveyDimensionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSurveyDimension"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<DeleteSurveyDimensionMutation, DeleteSurveyDimensionMutationVariables>;
export const PutSurveyDimensionValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PutSurveyDimensionValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PutSurveyDimensionValueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"putSurveyDimensionValue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<PutSurveyDimensionValueMutation, PutSurveyDimensionValueMutationVariables>;
export const DeleteSurveyDimensionValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSurveyDimensionValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSurveyDimensionValueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSurveyDimensionValue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<DeleteSurveyDimensionValueMutation, DeleteSurveyDimensionValueMutationVariables>;
export const DimensionsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DimensionsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DimensionRowGroup"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ValueFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyDimensionValueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleFi"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"fi","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleEn"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"en","block":false}}]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DimensionRowGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyDimensionType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isKeyDimension"}},{"kind":"Field","name":{"kind":"Name","value":"isMultiValue"}},{"kind":"Field","name":{"kind":"Name","value":"isShownToRespondent"}},{"kind":"Field","alias":{"kind":"Name","value":"titleFi"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"fi","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"titleEn"},"name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"en","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ValueFields"}}]}}]}}]} as unknown as DocumentNode<DimensionsListQuery, DimensionsListQueryVariables>;
export const UpdateSurveyLanguageMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSurveyLanguageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSurveyLanguageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSurveyLanguage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSurveyLanguageMutationMutation, UpdateSurveyLanguageMutationMutationVariables>;
export const DeleteSurveyLanguageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSurveyLanguage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSurveyLanguageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSurveyLanguage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<DeleteSurveyLanguageMutation, DeleteSurveyLanguageMutationVariables>;
export const UpdateSurveyFieldsLanguageMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSurveyFieldsLanguageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSurveyLanguageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSurveyLanguage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSurveyFieldsLanguageMutationMutation, UpdateSurveyFieldsLanguageMutationMutationVariables>;
export const EditSurveyFieldsPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EditSurveyFieldsPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EditSurveyFieldsPage"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditSurveyFieldsPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enrich"},"value":{"kind":"BooleanValue","value":false}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<EditSurveyFieldsPageQueryQuery, EditSurveyFieldsPageQueryQueryVariables>;
export const EditSurveyLanguagePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EditSurveyLanguagePageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EditSurveyLanguagePage"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditSurveyLanguagePage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thankYouMessage"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<EditSurveyLanguagePageQueryQuery, EditSurveyLanguagePageQueryQueryVariables>;
export const CreateSurveyLanguageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSurveyLanguage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSurveyLanguageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSurveyLanguage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSurveyLanguageMutation, CreateSurveyLanguageMutationVariables>;
export const UpdateSurveyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSurveyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSurveyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSurvey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSurveyMutationMutation, UpdateSurveyMutationMutationVariables>;
export const DeleteSurveyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSurveyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSurveyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSurvey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<DeleteSurveyMutationMutation, DeleteSurveyMutationMutationVariables>;
export const EditSurveyPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EditSurveyPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EditSurveyPage"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditSurveyPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"loginRequired"}},{"kind":"Field","name":{"kind":"Name","value":"anonymity"}},{"kind":"Field","name":{"kind":"Name","value":"maxResponsesPerUser"}},{"kind":"Field","name":{"kind":"Name","value":"countResponsesByCurrentUser"}},{"kind":"Field","name":{"kind":"Name","value":"activeFrom"}},{"kind":"Field","name":{"kind":"Name","value":"activeUntil"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"canRemove"}}]}}]}}]} as unknown as DocumentNode<EditSurveyPageQueryQuery, EditSurveyPageQueryQueryVariables>;
export const SurveyPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SurveyPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginRequired"}},{"kind":"Field","name":{"kind":"Name","value":"anonymity"}},{"kind":"Field","name":{"kind":"Name","value":"maxResponsesPerUser"}},{"kind":"Field","name":{"kind":"Name","value":"countResponsesByCurrentUser"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SurveyPageQueryQuery, SurveyPageQueryQueryVariables>;
export const UpdateResponseDimensionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateResponseDimensions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateResponseDimensionsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateResponseDimensions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateResponseDimensionsMutation, UpdateResponseDimensionsMutationVariables>;
export const SurveyResponseDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SurveyResponseDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"responseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"anonymity"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isMultiValue"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"response"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"responseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"values"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cachedDimensions"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SurveyResponseDetailQuery, SurveyResponseDetailQueryVariables>;
export const FormResponsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FormResponses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DimensionFilterInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"anonymity"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"keyFieldsOnly"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isKeyDimension"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"countResponses"}},{"kind":"Field","name":{"kind":"Name","value":"responses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SurveyResponse"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SurveyResponse"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LimitedResponseType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyFieldsOnly"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"cachedDimensions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyDimensionsOnly"},"value":{"kind":"BooleanValue","value":true}}]}]}}]} as unknown as DocumentNode<FormResponsesQuery, FormResponsesQueryVariables>;
export const SurveySummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SurveySummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DimensionFilterInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"countFilteredResponses"},"name":{"kind":"Name","value":"countResponses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]},{"kind":"Field","name":{"kind":"Name","value":"countResponses"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SurveySummaryQuery, SurveySummaryQueryVariables>;
export const SurveyThankYouPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SurveyThankYouPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surveySlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"form"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thankYouMessage"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SurveyThankYouPageQueryQuery, SurveyThankYouPageQueryQueryVariables>;
export const CreateSurveyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSurvey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSurveyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSurvey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"survey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSurveyMutation, CreateSurveyMutationVariables>;
export const SurveysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Surveys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"surveys"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"includeInactive"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Survey"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Survey"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SurveyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"activeFrom"}},{"kind":"Field","name":{"kind":"Name","value":"activeUntil"}},{"kind":"Field","name":{"kind":"Name","value":"countResponses"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<SurveysQuery, SurveysQueryVariables>;
export const ProfileSurveyResponsePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileSurveyResponsePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"responseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"responseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"values"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DimensionBadge"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"survey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymity"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DimensionBadge"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponseDimensionValueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ProfileSurveyResponsePageQuery, ProfileSurveyResponsePageQueryVariables>;
export const OwnFormResponsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OwnFormResponses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileResponsesTableRow"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileResponsesTableRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileResponseType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyDimensionsOnly"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<OwnFormResponsesQuery, OwnFormResponsesQueryVariables>;
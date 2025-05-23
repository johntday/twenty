import { ThemeColor } from 'twenty-ui';

import { RATING_VALUES } from '@/object-record/record-field/meta-types/constants/RatingValues';
import { ZodHelperLiteral } from '@/object-record/record-field/types/ZodHelperLiteral';
import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { ConnectedAccountProvider } from 'twenty-shared';
import * as z from 'zod';
import { RelationDefinitionType } from '~/generated-metadata/graphql';
import { CurrencyCode } from './CurrencyCode';
export type FieldUuidMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldBooleanMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldTextMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: {
    displayedMaxRows?: number;
  };
};

export type FieldDateTimeMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: {
    displayAsRelativeDate?: boolean;
  };
};

export type FieldDateMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: {
    displayAsRelativeDate?: boolean;
  };
};

export type FieldNumberVariant = 'number' | 'percentage';

export type FieldNumberMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  placeHolder: string;
  isPositive?: boolean;
  settings?: {
    decimals?: number;
    type?: FieldNumberVariant;
  };
};

export type FieldLinkMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: null;
};

export type FieldLinksMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldCurrencyMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  placeHolder: string;
  isPositive?: boolean;
  settings?: null;
};

export type FieldFullNameMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: null;
};

export type FieldEmailMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: null;
};

export type FieldEmailsMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldPhoneMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: null;
};

export type FieldRatingMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldAddressMetadata = {
  objectMetadataNameSingular?: string;
  placeHolder: string;
  fieldName: string;
  settings?: null;
};

export type FieldRawJsonMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  placeHolder: string;
  settings?: null;
};

export type FieldRichTextV2Metadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldRichTextMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldPositionMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldRelationMetadata = {
  fieldName: string;
  objectMetadataNameSingular?: string;
  relationFieldMetadataId: string;
  relationObjectMetadataNamePlural: string;
  relationObjectMetadataNameSingular: string;
  relationType?: RelationDefinitionType;
  targetFieldMetadataName?: string;
  useEditButton?: boolean;
  settings?: null;
};

export type FieldSelectMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  options: { label: string; color: ThemeColor; value: string }[];
  isNullable: boolean;
  settings?: null;
};

export type FieldMultiSelectMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  options: { label: string; color: ThemeColor; value: string }[];
  settings?: null;
};

export type FieldActorMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldArrayMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  values: { label: string; value: string }[];
  settings?: null;
};

export type FieldPhonesMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldTsVectorMetadata = {
  objectMetadataNameSingular?: string;
  fieldName: string;
  settings?: null;
};

export type FieldMetadata =
  | FieldBooleanMetadata
  | FieldCurrencyMetadata
  | FieldDateTimeMetadata
  | FieldDateMetadata
  | FieldEmailMetadata
  | FieldFullNameMetadata
  | FieldLinkMetadata
  | FieldNumberMetadata
  | FieldPhoneMetadata
  | FieldRatingMetadata
  | FieldRelationMetadata
  | FieldRichTextMetadata
  | FieldSelectMetadata
  | FieldMultiSelectMetadata
  | FieldTextMetadata
  | FieldUuidMetadata
  | FieldAddressMetadata
  | FieldActorMetadata
  | FieldArrayMetadata
  | FieldTsVectorMetadata
  | FieldRichTextV2Metadata
  | FieldRichTextMetadata;

export type FieldTextValue = string;
export type FieldUUidValue = string; // TODO: can we replace with a template literal type, or maybe overkill ?
export type FieldDateTimeValue = string | null;
export type FieldDateValue = string | null;
export type FieldNumberValue = number | null;
export type FieldBooleanValue = boolean;

export type FieldEmailsValue = {
  primaryEmail: string;
  additionalEmails: string[] | null;
};
export type FieldLinksValue = {
  primaryLinkLabel: string;
  primaryLinkUrl: string;
  secondaryLinks?: { label: string; url: string }[] | null;
};
export type FieldCurrencyValue = {
  currencyCode: CurrencyCode;
  amountMicros: number | null;
};
export type FormFieldCurrencyValue = {
  currencyCode: CurrencyCode | null;
  amountMicros: number | string | null;
};
export type FieldFullNameValue = { firstName: string; lastName: string };
export type FieldAddressValue = {
  addressStreet1: string;
  addressStreet2: string | null;
  addressCity: string | null;
  addressState: string | null;
  addressPostcode: string | null;
  addressCountry: string | null;
  addressLat: number | null;
  addressLng: number | null;
};
export type FieldRatingValue = (typeof RATING_VALUES)[number] | null;
export type FieldSelectValue = string | null;
export type FieldMultiSelectValue = string[] | null;

export type FieldRelationToOneValue = ObjectRecord | null;

export type FieldRelationFromManyValue = ObjectRecord[];

export type FieldRelationValue<
  T extends FieldRelationToOneValue | FieldRelationFromManyValue,
> = T;

export type Json = ZodHelperLiteral | { [key: string]: Json } | Json[];
export type FieldJsonValue = Record<string, Json> | Json[] | null;

export type FieldRichTextV2Value = {
  blocknote: string | null;
  markdown: string | null;
};

export type FieldRichTextValue = null | string;

const FieldActorSourceSchema = z.union([
  z.literal('API'),
  z.literal('IMPORT'),
  z.literal('EMAIL'),
  z.literal('CALENDAR'),
  z.literal('MANUAL'),
  z.literal('SYSTEM'),
  z.literal('WORKFLOW'),
]);

export const FieldActorValueSchema = z.object({
  source: FieldActorSourceSchema,
  workspaceMemberId: z.string().nullable(),
  name: z.string(),
  context: z.object({
    provider: z.nativeEnum(ConnectedAccountProvider).optional(),
  }),
});
export type FieldActorValue = z.infer<typeof FieldActorValueSchema>;

export type FieldActorForInputValue = Pick<
  FieldActorValue,
  'context' | 'source'
>;

export type FieldArrayValue = string[];

export type PhoneRecord = {
  number: string;
  callingCode: string;
  countryCode: string;
};

export type FieldPhonesValue = {
  primaryPhoneNumber: string;
  primaryPhoneCountryCode: string;
  primaryPhoneCallingCode?: string;
  additionalPhones?: PhoneRecord[] | null;
};

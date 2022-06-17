import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
  /** The `Decimal` scalar type to represent currency values */
  Decimal: number;
};

/** Account */
export type Account = {
  __typename?: 'Account';
  accountNumber: Scalars['String'];
  balances: Maybe<Array<Balance>>;
  bban: Scalars['String'];
  iban: Scalars['String'];
  /** The account id */
  id: Scalars['String'];
  sortCode: Scalars['String'];
  transactions: Maybe<TransactionConnection>;
  user: User;
};


/** Account */
export type AccountTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

/** The amount */
export type Amount = {
  __typename?: 'Amount';
  currency: CurrencyCode;
  instructedAmount: Scalars['Decimal'];
};

export type AuthenticatedUserResponse = {
  __typename?: 'AuthenticatedUserResponse';
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: User;
};

/** The amount */
export type Balance = {
  __typename?: 'Balance';
  amount: Scalars['Decimal'];
  currency: CurrencyCode;
  name: Scalars['String'];
};

export type CreateKycApplicantInput = {
  bundleId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateKycApplicantResponse = {
  __typename?: 'CreateKycApplicantResponse';
  applicantId: Scalars['String'];
  sdkToken: Scalars['String'];
};

export type CreditorInput = {
  accountName?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  sortCode?: InputMaybe<Scalars['String']>;
};

/** All possible currency options */
export enum CurrencyCode {
  Gbp = 'GBP',
  Usd = 'USD'
}

/** All possible invitiation statuses */
export enum InvitationStatus {
  Claimed = 'CLAIMED',
  Granted = 'GRANTED',
  None = 'NONE'
}

export type KycResultInput = {
  applicantId: Scalars['String'];
};

export type KycResultResponse = {
  __typename?: 'KycResultResponse';
  kycStatus: KycResultTypes;
};

/** All possible kyc statuses */
export enum KycResultTypes {
  AwaitingApplicant = 'AWAITING_APPLICANT',
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED',
  Paused = 'PAUSED',
  Reopened = 'REOPENED',
  Withdrawn = 'WITHDRAWN'
}

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type ManualRegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type ManualRegisterUserResponse = {
  __typename?: 'ManualRegisterUserResponse';
  password: Scalars['String'];
  user: User;
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createKycApplicant: CreateKycApplicantResponse;
  login: AuthenticatedUserResponse;
  manualRegister: ManualRegisterUserResponse;
  provisionInvitedUser: AuthenticatedUserResponse;
  refresh: AuthenticatedUserResponse;
  register: AuthenticatedUserResponse;
  resetPassword: ResetPasswordResponse;
  sendFastPayment: SendFastPaymentResponse;
  submitKycCheck: SubmitKycCheckResponse;
};


export type MutationCreateKycApplicantArgs = {
  input: CreateKycApplicantInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationManualRegisterArgs = {
  input: ManualRegisterInput;
};


export type MutationProvisionInvitedUserArgs = {
  input: ProvisionInvitedUserInput;
};


export type MutationRefreshArgs = {
  input: RefreshTokenInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendFastPaymentArgs = {
  input: SendFastPaymentInput;
};


export type MutationSubmitKycCheckArgs = {
  input: SubmitKycCheckInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Maybe<Scalars['String']>;
};

export type ProvisionInvitedUserInput = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkKycStatus: KycResultResponse;
  clearbank: MessageResponse;
  me: Maybe<User>;
  ping: Scalars['String'];
};


export type QueryCheckKycStatusArgs = {
  input: KycResultInput;
};

export type RefreshTokenInput = {
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type ResetPasswordInput = {
  email?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  message: Scalars['String'];
};

export type SendFastPaymentInput = {
  amount: Scalars['Decimal'];
  creditor: CreditorInput;
  currency: Scalars['String'];
  endToEndIdentification: Scalars['String'];
  reference?: InputMaybe<Scalars['String']>;
};

export type SendFastPaymentResponse = {
  __typename?: 'SendFastPaymentResponse';
  transaction: Transaction;
};

export type SubmitKycCheckInput = {
  applicantId: Scalars['String'];
  reportNames: Array<Scalars['String']>;
};

export type SubmitKycCheckResponse = {
  __typename?: 'SubmitKycCheckResponse';
  checkId: Scalars['String'];
};

/** The transaction */
export type Transaction = {
  __typename?: 'Transaction';
  amount: Amount;
  endToEndIdentifier: Scalars['String'];
  status: TransactionStatus;
  transactionDate: Scalars['String'];
  transactionId: Scalars['String'];
  transactionReference: Scalars['String'];
  transactionType: TransactionType;
};

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  edges: Array<TransactionEdge>;
  pageInfo: PageInfo;
};

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Transaction;
};

/** All possible transaction statuses */
export enum TransactionStatus {
  /** Accepted Customer Profile - Preceding check of technical validation was successful. Customer profile check was also successful. */
  AcceptedCustomerProfile = 'AcceptedCustomerProfile',
  /** Accepted Settlement Completed - Settlement on the debtor's account has been completed */
  AcceptedSettlementCompleted = 'AcceptedSettlementCompleted',
  /** Accepted Settlement In Process */
  AcceptedSettlementInProcess = 'AcceptedSettlementInProcess',
  AcceptedSubmission = 'AcceptedSubmission',
  /** Accepted Technical Validation - Authentication and syntactical and semantical validation are successful. */
  AcceptedTechnicalValidation = 'AcceptedTechnicalValidation',
  /** Accepted With Change - Instruction is accepted but a change will be made, such as date or remittance not sent. */
  AcceptedWithChange = 'AcceptedWithChange',
  /** Partially Accepted - A number of transactions have been accepted, whereas another number of transactions have not yet achieved "accepted" status. */
  PartiallyAccepted = 'PartiallyAccepted',
  /** Pending Payment - initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed. */
  PendingPayment = 'PendingPayment',
  /** Received - Payment initiation has been received by the receiving agent. */
  Received = 'Received',
  /** Rejected - Payment initiation or individual transaction included in the payment initiation has been rejected */
  Rejected = 'Rejected'
}

/** All possible transaction types */
export enum TransactionType {
  Credit = 'credit',
  Debit = 'debit'
}

/** User */
export type User = {
  __typename?: 'User';
  /** Returns a profile's accounts */
  accounts: Maybe<Array<Account>>;
  /** Date the profile was created */
  createdAt: Scalars['DateTime'];
  /** The profile's email */
  email: Scalars['String'];
  /** The profile's first name */
  firstName: Scalars['String'];
  /** The profile id */
  id: Scalars['ID'];
  /** Invitation status of profile */
  invitationStatus: Maybe<InvitationStatus>;
  /** KYC applicant id */
  kycStatus: KycResultTypes;
  /** The profile's last name */
  lastName: Scalars['String'];
  /** The profile's full name */
  name: Scalars['String'];
  /** The profile's phone number */
  phoneNumber: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthenticatedUserResponse', token: string, refreshToken: string, user: { __typename?: 'User', invitationStatus: InvitationStatus | null | undefined, accounts: Array<{ __typename?: 'Account', id: string }> | null | undefined } } };

export type RefreshMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthenticatedUserResponse', token: string, refreshToken: string, user: { __typename?: 'User', invitationStatus: InvitationStatus | null | undefined, accounts: Array<{ __typename?: 'Account', id: string }> | null | undefined } } };

export type ProvisionInvitedUserMutationVariables = Exact<{
  password: Scalars['String'];
  currentPassword: Scalars['String'];
}>;


export type ProvisionInvitedUserMutation = { __typename?: 'Mutation', provisionInvitedUser: { __typename?: 'AuthenticatedUserResponse', token: string, refreshToken: string, user: { __typename?: 'User', accounts: Array<{ __typename?: 'Account', id: string }> | null | undefined } } };

export type CreateKycApplicantMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  bundleId: Scalars['String'];
}>;


export type CreateKycApplicantMutation = { __typename?: 'Mutation', result: { __typename?: 'CreateKycApplicantResponse', applicantId: string, sdkToken: string } };

export type SubmitKycCheckMutationVariables = Exact<{
  applicantId: Scalars['String'];
  reportNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type SubmitKycCheckMutation = { __typename?: 'Mutation', result: { __typename?: 'SubmitKycCheckResponse', checkId: string } };

export type CheckKycStatusQueryVariables = Exact<{
  applicantId: Scalars['String'];
}>;


export type CheckKycStatusQuery = { __typename?: 'Query', result: { __typename?: 'KycResultResponse', kycStatus: KycResultTypes } };

export type SendFastPaymentMutationVariables = Exact<{
  input: SendFastPaymentInput;
}>;


export type SendFastPaymentMutation = { __typename?: 'Mutation', result: { __typename?: 'SendFastPaymentResponse', transaction: { __typename?: 'Transaction', endToEndIdentifier: string, transactionId: string, status: TransactionStatus, transactionReference: string, transactionDate: string, transactionType: TransactionType, amount: { __typename?: 'Amount', currency: CurrencyCode, instructedAmount: number } } } };

export type TransactionFieldsFragment = { __typename?: 'Transaction', endToEndIdentifier: string, transactionId: string, status: TransactionStatus, transactionReference: string, transactionDate: string, transactionType: TransactionType, amount: { __typename?: 'Amount', currency: CurrencyCode, instructedAmount: number } };

export type TranscationPaginatedFieldsFragment = { __typename?: 'TransactionConnection', edges: Array<{ __typename?: 'TransactionEdge', cursor: string, node: { __typename?: 'Transaction', endToEndIdentifier: string, transactionId: string, status: TransactionStatus, transactionReference: string, transactionDate: string, transactionType: TransactionType, amount: { __typename?: 'Amount', currency: CurrencyCode, instructedAmount: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', result: { __typename?: 'User', name: string, firstName: string, kycStatus: KycResultTypes, accounts: Array<{ __typename?: 'Account', accountNumber: string, iban: string, sortCode: string, balances: Array<{ __typename?: 'Balance', amount: number }> | null | undefined, transactions: { __typename?: 'TransactionConnection', edges: Array<{ __typename?: 'TransactionEdge', cursor: string, node: { __typename?: 'Transaction', endToEndIdentifier: string, transactionId: string, status: TransactionStatus, transactionReference: string, transactionDate: string, transactionType: TransactionType, amount: { __typename?: 'Amount', currency: CurrencyCode, instructedAmount: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } | null | undefined }> | null | undefined } | null | undefined };

export const TransactionFieldsFragmentDoc = gql`
    fragment TransactionFields on Transaction {
  amount {
    currency
    instructedAmount
  }
  endToEndIdentifier
  transactionId
  status
  transactionReference
  transactionDate
  transactionType
}
    `;
export const TranscationPaginatedFieldsFragmentDoc = gql`
    fragment TranscationPaginatedFields on TransactionConnection {
  edges {
    cursor
    node {
      ...TransactionFields
    }
  }
  pageInfo {
    hasNextPage
  }
}
    ${TransactionFieldsFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($email: String, $phoneNumber: String!, $password: String!) {
  login(input: {email: $email, phoneNumber: $phoneNumber, password: $password}) {
    user {
      accounts {
        id
      }
      invitationStatus
    }
    token
    refreshToken
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh($refreshToken: String!) {
  refresh(input: {refreshToken: $refreshToken}) {
    user {
      accounts {
        id
      }
      invitationStatus
    }
    token
    refreshToken
  }
}
    `;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, options);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = ApolloReactCommon.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = ApolloReactCommon.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const ProvisionInvitedUserDocument = gql`
    mutation ProvisionInvitedUser($password: String!, $currentPassword: String!) {
  provisionInvitedUser(
    input: {password: $password, currentPassword: $currentPassword}
  ) {
    user {
      accounts {
        id
      }
    }
    token
    refreshToken
  }
}
    `;

/**
 * __useProvisionInvitedUserMutation__
 *
 * To run a mutation, you first call `useProvisionInvitedUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProvisionInvitedUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [provisionInvitedUserMutation, { data, loading, error }] = useProvisionInvitedUserMutation({
 *   variables: {
 *      password: // value for 'password'
 *      currentPassword: // value for 'currentPassword'
 *   },
 * });
 */
export function useProvisionInvitedUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProvisionInvitedUserMutation, ProvisionInvitedUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ProvisionInvitedUserMutation, ProvisionInvitedUserMutationVariables>(ProvisionInvitedUserDocument, options);
      }
export type ProvisionInvitedUserMutationHookResult = ReturnType<typeof useProvisionInvitedUserMutation>;
export type ProvisionInvitedUserMutationResult = ApolloReactCommon.MutationResult<ProvisionInvitedUserMutation>;
export type ProvisionInvitedUserMutationOptions = ApolloReactCommon.BaseMutationOptions<ProvisionInvitedUserMutation, ProvisionInvitedUserMutationVariables>;
export const CreateKycApplicantDocument = gql`
    mutation CreateKycApplicant($firstName: String!, $lastName: String!, $bundleId: String!) {
  result: createKycApplicant(
    input: {firstName: $firstName, lastName: $lastName, bundleId: $bundleId}
  ) {
    applicantId
    sdkToken
  }
}
    `;

/**
 * __useCreateKycApplicantMutation__
 *
 * To run a mutation, you first call `useCreateKycApplicantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKycApplicantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKycApplicantMutation, { data, loading, error }] = useCreateKycApplicantMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      bundleId: // value for 'bundleId'
 *   },
 * });
 */
export function useCreateKycApplicantMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateKycApplicantMutation, CreateKycApplicantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateKycApplicantMutation, CreateKycApplicantMutationVariables>(CreateKycApplicantDocument, options);
      }
export type CreateKycApplicantMutationHookResult = ReturnType<typeof useCreateKycApplicantMutation>;
export type CreateKycApplicantMutationResult = ApolloReactCommon.MutationResult<CreateKycApplicantMutation>;
export type CreateKycApplicantMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateKycApplicantMutation, CreateKycApplicantMutationVariables>;
export const SubmitKycCheckDocument = gql`
    mutation SubmitKycCheck($applicantId: String!, $reportNames: [String!]!) {
  result: submitKycCheck(
    input: {applicantId: $applicantId, reportNames: $reportNames}
  ) {
    checkId
  }
}
    `;

/**
 * __useSubmitKycCheckMutation__
 *
 * To run a mutation, you first call `useSubmitKycCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitKycCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitKycCheckMutation, { data, loading, error }] = useSubmitKycCheckMutation({
 *   variables: {
 *      applicantId: // value for 'applicantId'
 *      reportNames: // value for 'reportNames'
 *   },
 * });
 */
export function useSubmitKycCheckMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitKycCheckMutation, SubmitKycCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SubmitKycCheckMutation, SubmitKycCheckMutationVariables>(SubmitKycCheckDocument, options);
      }
export type SubmitKycCheckMutationHookResult = ReturnType<typeof useSubmitKycCheckMutation>;
export type SubmitKycCheckMutationResult = ApolloReactCommon.MutationResult<SubmitKycCheckMutation>;
export type SubmitKycCheckMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitKycCheckMutation, SubmitKycCheckMutationVariables>;
export const CheckKycStatusDocument = gql`
    query CheckKycStatus($applicantId: String!) {
  result: checkKycStatus(input: {applicantId: $applicantId}) {
    kycStatus
  }
}
    `;

/**
 * __useCheckKycStatusQuery__
 *
 * To run a query within a React component, call `useCheckKycStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckKycStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckKycStatusQuery({
 *   variables: {
 *      applicantId: // value for 'applicantId'
 *   },
 * });
 */
export function useCheckKycStatusQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CheckKycStatusQuery, CheckKycStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CheckKycStatusQuery, CheckKycStatusQueryVariables>(CheckKycStatusDocument, options);
      }
export function useCheckKycStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CheckKycStatusQuery, CheckKycStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CheckKycStatusQuery, CheckKycStatusQueryVariables>(CheckKycStatusDocument, options);
        }
export type CheckKycStatusQueryHookResult = ReturnType<typeof useCheckKycStatusQuery>;
export type CheckKycStatusLazyQueryHookResult = ReturnType<typeof useCheckKycStatusLazyQuery>;
export type CheckKycStatusQueryResult = ApolloReactCommon.QueryResult<CheckKycStatusQuery, CheckKycStatusQueryVariables>;
export const SendFastPaymentDocument = gql`
    mutation SendFastPayment($input: SendFastPaymentInput!) {
  result: sendFastPayment(input: $input) {
    transaction {
      ...TransactionFields
    }
  }
}
    ${TransactionFieldsFragmentDoc}`;

/**
 * __useSendFastPaymentMutation__
 *
 * To run a mutation, you first call `useSendFastPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendFastPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendFastPaymentMutation, { data, loading, error }] = useSendFastPaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendFastPaymentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendFastPaymentMutation, SendFastPaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SendFastPaymentMutation, SendFastPaymentMutationVariables>(SendFastPaymentDocument, options);
      }
export type SendFastPaymentMutationHookResult = ReturnType<typeof useSendFastPaymentMutation>;
export type SendFastPaymentMutationResult = ApolloReactCommon.MutationResult<SendFastPaymentMutation>;
export type SendFastPaymentMutationOptions = ApolloReactCommon.BaseMutationOptions<SendFastPaymentMutation, SendFastPaymentMutationVariables>;
export const UserDocument = gql`
    query User {
  result: me {
    name
    firstName
    kycStatus
    accounts {
      accountNumber
      iban
      sortCode
      balances {
        amount
      }
      transactions(first: 6) {
        ...TranscationPaginatedFields
      }
    }
  }
}
    ${TranscationPaginatedFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export type AccountKeySpecifier = ('accountNumber' | 'balances' | 'bban' | 'iban' | 'id' | 'sortCode' | 'transactions' | 'user' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	accountNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	balances?: FieldPolicy<any> | FieldReadFunction<any>,
	bban?: FieldPolicy<any> | FieldReadFunction<any>,
	iban?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sortCode?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AmountKeySpecifier = ('currency' | 'instructedAmount' | AmountKeySpecifier)[];
export type AmountFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	instructedAmount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatedUserResponseKeySpecifier = ('refreshToken' | 'token' | 'user' | AuthenticatedUserResponseKeySpecifier)[];
export type AuthenticatedUserResponseFieldPolicy = {
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BalanceKeySpecifier = ('amount' | 'currency' | 'name' | BalanceKeySpecifier)[];
export type BalanceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateKycApplicantResponseKeySpecifier = ('applicantId' | 'sdkToken' | CreateKycApplicantResponseKeySpecifier)[];
export type CreateKycApplicantResponseFieldPolicy = {
	applicantId?: FieldPolicy<any> | FieldReadFunction<any>,
	sdkToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KycResultResponseKeySpecifier = ('kycStatus' | KycResultResponseKeySpecifier)[];
export type KycResultResponseFieldPolicy = {
	kycStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManualRegisterUserResponseKeySpecifier = ('password' | 'user' | ManualRegisterUserResponseKeySpecifier)[];
export type ManualRegisterUserResponseFieldPolicy = {
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageResponseKeySpecifier = ('status' | MessageResponseKeySpecifier)[];
export type MessageResponseFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createKycApplicant' | 'login' | 'manualRegister' | 'provisionInvitedUser' | 'refresh' | 'register' | 'resetPassword' | 'sendFastPayment' | 'submitKycCheck' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createKycApplicant?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	manualRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	provisionInvitedUser?: FieldPolicy<any> | FieldReadFunction<any>,
	refresh?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	sendFastPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	submitKycCheck?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('checkKycStatus' | 'clearbank' | 'me' | 'ping' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	checkKycStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	clearbank?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	ping?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordResponseKeySpecifier = ('message' | ResetPasswordResponseKeySpecifier)[];
export type ResetPasswordResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendFastPaymentResponseKeySpecifier = ('transaction' | SendFastPaymentResponseKeySpecifier)[];
export type SendFastPaymentResponseFieldPolicy = {
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitKycCheckResponseKeySpecifier = ('checkId' | SubmitKycCheckResponseKeySpecifier)[];
export type SubmitKycCheckResponseFieldPolicy = {
	checkId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('amount' | 'endToEndIdentifier' | 'status' | 'transactionDate' | 'transactionId' | 'transactionReference' | 'transactionType' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	endToEndIdentifier?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionId?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionReference?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionConnectionKeySpecifier = ('edges' | 'pageInfo' | TransactionConnectionKeySpecifier)[];
export type TransactionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionEdgeKeySpecifier = ('cursor' | 'node' | TransactionEdgeKeySpecifier)[];
export type TransactionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('accounts' | 'createdAt' | 'email' | 'firstName' | 'id' | 'invitationStatus' | 'kycStatus' | 'lastName' | 'name' | 'phoneNumber' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	kycStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	Amount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AmountKeySpecifier | (() => undefined | AmountKeySpecifier),
		fields?: AmountFieldPolicy,
	},
	AuthenticatedUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatedUserResponseKeySpecifier | (() => undefined | AuthenticatedUserResponseKeySpecifier),
		fields?: AuthenticatedUserResponseFieldPolicy,
	},
	Balance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BalanceKeySpecifier | (() => undefined | BalanceKeySpecifier),
		fields?: BalanceFieldPolicy,
	},
	CreateKycApplicantResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateKycApplicantResponseKeySpecifier | (() => undefined | CreateKycApplicantResponseKeySpecifier),
		fields?: CreateKycApplicantResponseFieldPolicy,
	},
	KycResultResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KycResultResponseKeySpecifier | (() => undefined | KycResultResponseKeySpecifier),
		fields?: KycResultResponseFieldPolicy,
	},
	ManualRegisterUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManualRegisterUserResponseKeySpecifier | (() => undefined | ManualRegisterUserResponseKeySpecifier),
		fields?: ManualRegisterUserResponseFieldPolicy,
	},
	MessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageResponseKeySpecifier | (() => undefined | MessageResponseKeySpecifier),
		fields?: MessageResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ResetPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		fields?: ResetPasswordResponseFieldPolicy,
	},
	SendFastPaymentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendFastPaymentResponseKeySpecifier | (() => undefined | SendFastPaymentResponseKeySpecifier),
		fields?: SendFastPaymentResponseFieldPolicy,
	},
	SubmitKycCheckResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitKycCheckResponseKeySpecifier | (() => undefined | SubmitKycCheckResponseKeySpecifier),
		fields?: SubmitKycCheckResponseFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	TransactionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionConnectionKeySpecifier | (() => undefined | TransactionConnectionKeySpecifier),
		fields?: TransactionConnectionFieldPolicy,
	},
	TransactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionEdgeKeySpecifier | (() => undefined | TransactionEdgeKeySpecifier),
		fields?: TransactionEdgeFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
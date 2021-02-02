/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      state
      city
      pincode
      building_detail
      landmark
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        state
        city
        pincode
        building_detail
        landmark
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContactDetails = /* GraphQL */ `
  query GetContactDetails($id: ID!) {
    getContactDetails(id: $id) {
      id
      phone_number
      email_address
      address {
        id
        state
        city
        pincode
        building_detail
        landmark
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContactDetailss = /* GraphQL */ `
  query ListContactDetailss(
    $filter: ModelContactDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHelpSeeker = /* GraphQL */ `
  query GetHelpSeeker($id: ID!) {
    getHelpSeeker(id: $id) {
      id
      name
      contact_details {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      note
      type
      createdAt
      updatedAt
    }
  }
`;
export const listHelpSeekers = /* GraphQL */ `
  query ListHelpSeekers(
    $filter: ModelHelpSeekerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHelpSeekers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        note
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVolunteer = /* GraphQL */ `
  query GetVolunteer($id: ID!) {
    getVolunteer(id: $id) {
      id
      name
      contact_details {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      note
      skill_type
      language
      num_of_hrs_per_week
      createdAt
      updatedAt
    }
  }
`;
export const listVolunteers = /* GraphQL */ `
  query ListVolunteers(
    $filter: ModelVolunteerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVolunteers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        note
        skill_type
        language
        num_of_hrs_per_week
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDonor = /* GraphQL */ `
  query GetDonor($id: ID!) {
    getDonor(id: $id) {
      id
      name
      contact_details {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      note
      amount
      case {
        id
        description
        request {
          id
          name
          details
          help_with
          request_type
          num_of_adults
          num_of_children
          createdAt
          updatedAt
        }
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        requirement_type {
          id
          name
          whishlist_url
          description
          createdAt
          updatedAt
        }
        priority
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDonors = /* GraphQL */ `
  query ListDonors(
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        note
        amount
        case {
          id
          description
          priority
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      name
      details
      contact_details {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      help_with
      request_type
      num_of_adults
      num_of_children
      createdAt
      updatedAt
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        details
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        help_with
        request_type
        num_of_adults
        num_of_children
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDistributor = /* GraphQL */ `
  query GetDistributor($id: ID!) {
    getDistributor(id: $id) {
      id
      name
      details
      isGovt
      contact_details {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      request_type
      cases_per_week
      num_of_volunteers
      link
      createdAt
      updatedAt
    }
  }
`;
export const listDistributors = /* GraphQL */ `
  query ListDistributors(
    $filter: ModelDistributorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDistributors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        details
        isGovt
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        request_type
        cases_per_week
        num_of_volunteers
        link
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
      id
      description
      request {
        id
        name
        details
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        help_with
        request_type
        num_of_adults
        num_of_children
        createdAt
        updatedAt
      }
      contact_details {
        id
        phone_number
        email_address
        address {
          id
          state
          city
          pincode
          building_detail
          landmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      requirement_type {
        id
        name
        whishlist_url
        description
        createdAt
        updatedAt
      }
      priority
      status
      createdAt
      updatedAt
    }
  }
`;
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        request {
          id
          name
          details
          help_with
          request_type
          num_of_adults
          num_of_children
          createdAt
          updatedAt
        }
        contact_details {
          id
          phone_number
          email_address
          createdAt
          updatedAt
        }
        requirement_type {
          id
          name
          whishlist_url
          description
          createdAt
          updatedAt
        }
        priority
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRequirement = /* GraphQL */ `
  query GetRequirement($id: ID!) {
    getRequirement(id: $id) {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;
export const listRequirements = /* GraphQL */ `
  query ListRequirements(
    $filter: ModelRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequirements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        whishlist_url
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

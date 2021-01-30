/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createContactDetails = /* GraphQL */ `
  mutation CreateContactDetails(
    $input: CreateContactDetailsInput!
    $condition: ModelContactDetailsConditionInput
  ) {
    createContactDetails(input: $input, condition: $condition) {
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
export const updateContactDetails = /* GraphQL */ `
  mutation UpdateContactDetails(
    $input: UpdateContactDetailsInput!
    $condition: ModelContactDetailsConditionInput
  ) {
    updateContactDetails(input: $input, condition: $condition) {
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
export const deleteContactDetails = /* GraphQL */ `
  mutation DeleteContactDetails(
    $input: DeleteContactDetailsInput!
    $condition: ModelContactDetailsConditionInput
  ) {
    deleteContactDetails(input: $input, condition: $condition) {
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
export const createHelpSeeker = /* GraphQL */ `
  mutation CreateHelpSeeker(
    $input: CreateHelpSeekerInput!
    $condition: ModelHelpSeekerConditionInput
  ) {
    createHelpSeeker(input: $input, condition: $condition) {
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
export const updateHelpSeeker = /* GraphQL */ `
  mutation UpdateHelpSeeker(
    $input: UpdateHelpSeekerInput!
    $condition: ModelHelpSeekerConditionInput
  ) {
    updateHelpSeeker(input: $input, condition: $condition) {
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
export const deleteHelpSeeker = /* GraphQL */ `
  mutation DeleteHelpSeeker(
    $input: DeleteHelpSeekerInput!
    $condition: ModelHelpSeekerConditionInput
  ) {
    deleteHelpSeeker(input: $input, condition: $condition) {
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
export const createVolunteer = /* GraphQL */ `
  mutation CreateVolunteer(
    $input: CreateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    createVolunteer(input: $input, condition: $condition) {
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
export const updateVolunteer = /* GraphQL */ `
  mutation UpdateVolunteer(
    $input: UpdateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    updateVolunteer(input: $input, condition: $condition) {
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
export const deleteVolunteer = /* GraphQL */ `
  mutation DeleteVolunteer(
    $input: DeleteVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    deleteVolunteer(input: $input, condition: $condition) {
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
export const createDonor = /* GraphQL */ `
  mutation CreateDonor(
    $input: CreateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    createDonor(input: $input, condition: $condition) {
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
        helpseeker {
          id
          name
          note
          type
          createdAt
          updatedAt
        }
        description
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
        num_of_adults
        num_of_children
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
export const updateDonor = /* GraphQL */ `
  mutation UpdateDonor(
    $input: UpdateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    updateDonor(input: $input, condition: $condition) {
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
        helpseeker {
          id
          name
          note
          type
          createdAt
          updatedAt
        }
        description
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
        num_of_adults
        num_of_children
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
export const deleteDonor = /* GraphQL */ `
  mutation DeleteDonor(
    $input: DeleteDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    deleteDonor(input: $input, condition: $condition) {
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
        helpseeker {
          id
          name
          note
          type
          createdAt
          updatedAt
        }
        description
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
        num_of_adults
        num_of_children
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
export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
      id
      helpseeker {
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
      description
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
      num_of_adults
      num_of_children
      priority
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
      id
      helpseeker {
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
      description
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
      num_of_adults
      num_of_children
      priority
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
      id
      helpseeker {
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
      description
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
      num_of_adults
      num_of_children
      priority
      status
      createdAt
      updatedAt
    }
  }
`;
export const createRequirement = /* GraphQL */ `
  mutation CreateRequirement(
    $input: CreateRequirementInput!
    $condition: ModelRequirementConditionInput
  ) {
    createRequirement(input: $input, condition: $condition) {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateRequirement = /* GraphQL */ `
  mutation UpdateRequirement(
    $input: UpdateRequirementInput!
    $condition: ModelRequirementConditionInput
  ) {
    updateRequirement(input: $input, condition: $condition) {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequirement = /* GraphQL */ `
  mutation DeleteRequirement(
    $input: DeleteRequirementInput!
    $condition: ModelRequirementConditionInput
  ) {
    deleteRequirement(input: $input, condition: $condition) {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;

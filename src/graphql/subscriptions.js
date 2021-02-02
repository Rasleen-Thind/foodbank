/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateContactDetails = /* GraphQL */ `
  subscription OnCreateContactDetails {
    onCreateContactDetails {
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
export const onUpdateContactDetails = /* GraphQL */ `
  subscription OnUpdateContactDetails {
    onUpdateContactDetails {
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
export const onDeleteContactDetails = /* GraphQL */ `
  subscription OnDeleteContactDetails {
    onDeleteContactDetails {
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
export const onCreateHelpSeeker = /* GraphQL */ `
  subscription OnCreateHelpSeeker {
    onCreateHelpSeeker {
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
export const onUpdateHelpSeeker = /* GraphQL */ `
  subscription OnUpdateHelpSeeker {
    onUpdateHelpSeeker {
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
export const onDeleteHelpSeeker = /* GraphQL */ `
  subscription OnDeleteHelpSeeker {
    onDeleteHelpSeeker {
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
export const onCreateVolunteer = /* GraphQL */ `
  subscription OnCreateVolunteer {
    onCreateVolunteer {
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
export const onUpdateVolunteer = /* GraphQL */ `
  subscription OnUpdateVolunteer {
    onUpdateVolunteer {
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
export const onDeleteVolunteer = /* GraphQL */ `
  subscription OnDeleteVolunteer {
    onDeleteVolunteer {
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
export const onCreateDonor = /* GraphQL */ `
  subscription OnCreateDonor {
    onCreateDonor {
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
export const onUpdateDonor = /* GraphQL */ `
  subscription OnUpdateDonor {
    onUpdateDonor {
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
export const onDeleteDonor = /* GraphQL */ `
  subscription OnDeleteDonor {
    onDeleteDonor {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
export const onCreateDistributor = /* GraphQL */ `
  subscription OnCreateDistributor {
    onCreateDistributor {
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
export const onUpdateDistributor = /* GraphQL */ `
  subscription OnUpdateDistributor {
    onUpdateDistributor {
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
export const onDeleteDistributor = /* GraphQL */ `
  subscription OnDeleteDistributor {
    onDeleteDistributor {
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
export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase {
    onCreateCase {
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
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase {
    onUpdateCase {
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
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase {
    onDeleteCase {
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
export const onCreateRequirement = /* GraphQL */ `
  subscription OnCreateRequirement {
    onCreateRequirement {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRequirement = /* GraphQL */ `
  subscription OnUpdateRequirement {
    onUpdateRequirement {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRequirement = /* GraphQL */ `
  subscription OnDeleteRequirement {
    onDeleteRequirement {
      id
      name
      whishlist_url
      description
      createdAt
      updatedAt
    }
  }
`;

module.exports = Contact = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Wed Jan 08 2014 12:43:55 GMT-0600 (CST)

// This table holds contact record data as well as custom contact fields. You will
// not see the custom fields listed in the fields below, as these are custom to
// each different Infusionsoft application.
.class('Contact') .define({

    __static__field__string__edit__delete__add__read__Address1Type:
        'Address1Type',

    __static__field__string__edit__delete__add__read__Address2Street1:
        'Address2Street1',

    __static__field__string__edit__delete__add__read__Address2Street2:
        'Address2Street2',

    __static__field__string__edit__delete__add__read__Address2Type:
        'Address2Type',

    __static__field__string__edit__delete__add__read__Address3Street1:
        'Address3Street1',

    __static__field__string__edit__delete__add__read__Address3Street2:
        'Address3Street2',

    __static__field__string__edit__delete__add__read__Address3Type:
        'Address3Type',

    __static__field__datetime__edit__delete__add__read__Anniversary:
        'Anniversary',

    __static__field__string__edit__delete__add__read__AssistantName:
        'AssistantName',

    __static__field__string__edit__delete__add__read__AssistantPhone:
        'AssistantPhone',

    __static__field__string__edit__delete__add__read__BillingInformation:
        'BillingInformation',

    __static__field__datetime__edit__delete__add__read__Birthday:
        'Birthday',

    __static__field__string__edit__delete__add__read__City:
        'City',

    __static__field__string__edit__delete__add__read__City2:
        'City2',

    __static__field__string__edit__delete__add__read__City3:
        'City3',

    __static__field__string__edit__delete__add__read__Company:
        'Company',

    __static__field__number__edit__delete__add__read__AccountId:
        'AccountId',

    __static__field__number__edit__delete__add__read__CompanyID:
        'CompanyID',

    __static__field__string__edit__delete__add__read__ContactNotes:
        'ContactNotes',

    __static__field__string__edit__delete__add__read__ContactType:
        'ContactType',

    __static__field__string__edit__delete__add__read__Country:
        'Country',

    __static__field__string__edit__delete__add__read__Country2:
        'Country2',

    __static__field__string__edit__delete__add__read__Country3:
        'Country3',

    __static__field__number__read__CreatedBy:
        'CreatedBy',

    __static__field__datetime__read__DateCreated:
        'DateCreated',

    __static__field__string__edit__delete__add__read__Email:
        'Email',

    __static__field__string__edit__delete__add__read__EmailAddress2:
        'EmailAddress2',

    __static__field__string__edit__delete__add__read__EmailAddress3:
        'EmailAddress3',

    __static__field__string__edit__delete__add__read__Fax1:
        'Fax1',

    __static__field__string__edit__delete__add__read__Fax1Type:
        'Fax1Type',

    __static__field__string__edit__delete__add__read__Fax2:
        'Fax2',

    __static__field__string__edit__delete__add__read__Fax2Type:
        'Fax2Type',

    __static__field__string__edit__delete__add__read__FirstName:
        'FirstName',

    __static__field__string__read__Groups:
        'Groups',

    __static__field__primary__number__read__Id:
        'Id',

    __static__field__string__edit__delete__add__read__JobTitle:
        'JobTitle',

    __static__field__string__edit__delete__add__read__LastName:
        'LastName',

    __static__field__datetime__read__LastUpdated:
        'LastUpdated',

    __static__field__number__read__LastUpdatedBy:
        'LastUpdatedBy',

    __static__field__string__edit__add__read__Leadsource:
        'Leadsource',

    __static__field__number__edit__add__read__LeadSourceId:
        'LeadSourceId',

    __static__field__string__edit__delete__add__read__MiddleName:
        'MiddleName',

    __static__field__string__edit__delete__add__read__Nickname:
        'Nickname',

    __static__field__number__edit__delete__add__read__OwnerID:
        'OwnerID',

    __static__field__string__edit__delete__add__read__Password:
        'Password',

    __static__field__string__edit__delete__add__read__Phone1:
        'Phone1',

    __static__field__string__edit__delete__add__read__Phone1Ext:
        'Phone1Ext',

    __static__field__string__edit__delete__add__read__Phone1Type:
        'Phone1Type',

    __static__field__string__edit__delete__add__read__Phone2:
        'Phone2',

    __static__field__string__edit__delete__add__read__Phone2Ext:
        'Phone2Ext',

    __static__field__string__edit__delete__add__read__Phone2Type:
        'Phone2Type',

    __static__field__string__edit__delete__add__read__Phone3:
        'Phone3',

    __static__field__string__edit__delete__add__read__Phone3Ext:
        'Phone3Ext',

    __static__field__string__edit__delete__add__read__Phone3Type:
        'Phone3Type',

    __static__field__string__edit__delete__add__read__Phone4:
        'Phone4',

    __static__field__string__edit__delete__add__read__Phone4Ext:
        'Phone4Ext',

    __static__field__string__edit__delete__add__read__Phone4Type:
        'Phone4Type',

    __static__field__string__edit__delete__add__read__Phone5:
        'Phone5',

    __static__field__string__edit__delete__add__read__Phone5Ext:
        'Phone5Ext',

    __static__field__string__edit__delete__add__read__Phone5Type:
        'Phone5Type',

    __static__field__string__edit__delete__add__read__PostalCode:
        'PostalCode',

    __static__field__string__edit__delete__add__read__PostalCode2:
        'PostalCode2',

    __static__field__string__edit__delete__add__read__PostalCode3:
        'PostalCode3',

    __static__field__string__edit__delete__add__read__ReferralCode:
        'ReferralCode',

    __static__field__string__edit__delete__add__read__SpouseName:
        'SpouseName',

    __static__field__string__edit__delete__add__read__State:
        'State',

    __static__field__string__edit__delete__add__read__State2:
        'State2',

    __static__field__string__edit__delete__add__read__State3:
        'State3',

    __static__field__string__edit__delete__add__read__StreetAddress1:
        'StreetAddress1',

    __static__field__string__edit__delete__add__read__StreetAddress2:
        'StreetAddress2',

    __static__field__string__edit__delete__add__read__Suffix:
        'Suffix',

    __static__field__string__edit__delete__add__read__Title:
        'Title',

    __static__field__string__edit__delete__add__read__Username:
        'Username',

    __static__field__string__read__Validated:
        'Validated',

    __static__field__string__edit__delete__add__read__Website:
        'Website',

    __static__field__string__edit__delete__add__read__ZipFour1:
        'ZipFour1',

    __static__field__string__edit__delete__add__read__ZipFour2:
        'ZipFour2',

    __static__field__string__edit__delete__add__read__ZipFour3:
        'ZipFour3'

});
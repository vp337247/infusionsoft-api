module.exports = CampaignStep = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Wed Jan 08 2014 12:43:55 GMT-0600 (CST)

// This table holds individual follow-up sequence step data. There is one row in
// this table for each step found in a given follow-up sequence.
.class('CampaignStep') .define({

    __static__field__primary__number__read__Id:
        'Id',

    __static__field__number__read__CampaignId:
        'CampaignId',

    __static__field__number__read__TemplateId:
        'TemplateId',

    __static__field__string__read__StepStatus:
        'StepStatus',

    __static__field__string__read__StepTitle:
        'StepTitle'

});
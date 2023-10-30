const integration = {
  id: "string",
  name: "name of the integration (string)",
  description: "description (string)",
  categories: "string",
  logoUrl: "url of the logo (string)",
  additionalImages: [
    { url: "url of the image", format: "extension of the image" },
  ],
  version: "1.0.0",
  auth_type: "oauth",
  auth_fields: [
    {
      required: true,
      type: "str",
      key: "access_token",
    },
    {
      required: true,
      type: "str",
      key: "refresh_token",
    },
  ],
};

const trigger = {
  id: "string (string)",
  integrationId: "id of the integration in which this trigger is",
  name: "name of the trigger (string)",
  longDescription: "long desc of the trigger (string)",
  shortDescription: "short description of the trigger (string)",
  hintText: "hint text (string)",
  logo: "url of the logo or svg as string (string)",
  events: ["here we will define the ids of the events to map (list)"],
};

// this is one event
const event = {
  id: "string",
  triggerId: "id of the trigger to which it is attached to",
  name: "name of the event (string)",
  shortDescription: "short description of the event (string)",
  eventCategory: "eventCategory (string)",
  eventSource: "source api for the event (string)",
  specificEvent: "A specific event from your event source. (doubt)",
  configurations: [
    // this is one field there can be more like this
    {
      name: "field Name in the setup (string)",
      type: "type of the field toggle, radio, dropdown etc (string)",
      hintText: "optional hint text (string)",
      toolTip: "optional tooltip (string)",
      optionalField: "weather this field will be optional or not (boolean )",
      placeHolder: "if it is a text field give a placeholder (string)",
      dataSet: "data set (!doubt)",
      category:
        "Select the category of data you want to see in this field .(string)",
      metrics: "don't know what this is",
      sort: "boolean",
      characterLimit: "limit of characters user can enter (number or string)",

      // here you can show or hide this field based on some condition
      show: "boolean true or false",
      matchCondition: "boolean based on this we will decide AND or OR operator",
      conditions: [
        {
          fieldName:
            "name of the field to which this condition will apply to (string)",
          fieldState: "state of the field (doubt)",
          fieldValue: "value of the field which will match (string)",
        },
        {
          fieldName: "name2",
          fieldState: "state2",
          fieldValue: "value2",
        },
      ],
    },
  ],
};

const inte = {
  id: 387318,
  date: "2023-10-03T11:25:56+00:00",
  app_id: 192591,
  version: "1.0.0",
  platform_version: "15.3.0",
  selected_api: "App192591CLIAPI@1.0.0",
  deployment: "non-production",
  definition_override: {
    version: "1.0.0",
    platformVersion: "15.3.0",
    authentication: {
      type: "custom",
      test: {
        headers: {},
      },
    },
    triggers: {
      hemang: {
        operation: {
          perform: {
            headers: {
              Accept: "application/json",
            },
            url: "https://pms.jaiinfoway.com/board",
          },
          type: "polling",
        },
        display: {
          description:
            "testing description testing description testing description testing description",
          hidden: false,
          label: "hemang",
        },
        key: "hemang",
        noun: "hemang",
      },
    },
  },
  definition: null,
  etag: "530ac25fac56bbc36d77dbdc757cd9dd",
  deprecation_date: null,
  user_count: 0,
  user_count_updated_at: 1696332365,
  oauth_redirect_uri:
    "https://zapier.com/dashboard/auth/oauth/return/App192591CLIAPI/",
  invite_url:
    "https://zapier.com/developer/public-invite/192591/387318/79acf6aa2da0f7b5965a1a58c2f4843c/",
  core_npm_version: "15.3.0",
  changelog: null,
  is_ui: true,
  submit_status: null,
  last_public_date: null,
  metadata: {
    has_bugfixes: false,
    has_feature_updates: false,
  },
  author: {
    id: 16630602,
    email: "hemangchaudhry@gmail.com",
  },
};

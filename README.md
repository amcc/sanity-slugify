# Slugify automatically

Auto slugify with the title. This does require that your document type has a string field you want to use as a slug. In this case we have a title. This also needs to be required for this approach to make sense.

A slug will only be auto-generated if one doesn't already exist. Once it has been done the first time there will be a slug object on the document and it wont run again. To change the slug it can be manually entered, or the "Generate" button can be used as normal.

see "actions/slugOnSave.js"

the action is registerd in "sanity.config.js"

# Things to modify yourself

Set your Project ID by making a .env file with SANITY_STUDIO_PROJECT_ID=yourid, or just directly edit the sanity.config.js

In the slugOnSave action I am checking the document type, you will see this: ```props.type !== 'note'``` In your project change 'note' for your document type.

There's a lot you can do in the action as we have access to **draft** in props. This is the current state of the submitted form. We also have access to **published** in props which shows the previously submitted state of the document. So you can go wild here and do quite a lot. 

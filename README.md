# Sanity Notes database

Make notes with sanity

# Bonus feature

Auto slugify with the title. This does require that your document type has a string field you want to use as a slug. In this case we have a title. This also needs to be required for this approach to make sense.

A slug will only be auto-generated if one doesn't already exist. Once it has been done the first time there will be a slug object on the document and it wont run again. To change the slug it can be manually entered, or the "Generate" button can be used as normal.

see "actions/slugOnSave.js"

the action is registerd in "sanity.config.js"

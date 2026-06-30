# Account Opening Authoring Guide

This guide explains how to set up and use:

1. Content Fragment Models (CFMs)
2. Content Fragments (CFs)
3. Universal Editor (UE) authoring

for the account-opening experience built with these blocks:

- Hero
- Accounts
- Form

## 1. What You Have Today

Your blocks are already authorable in Universal Editor.

That means you can publish pages immediately by filling block fields in UE.

If you also need centralized, reusable content management (enterprise content operations), create Content Fragment Models and Content Fragments and use them as your source of truth.

## 2. Recommended Authoring Strategy

Use a hybrid content workflow:

1. Maintain canonical content in Content Fragments.
2. Author page structure and block placement in Universal Editor.
3. Copy or sync approved fragment values into block fields.

This gives you:

- Reuse and governance (from CFs)
- Fast page composition (from UE)

## 3. Prerequisites

Before creating models/fragments:

1. Ensure your AEM configuration folder is enabled for Content Fragment Models.
2. Ensure authors have permissions for:
- Content Fragment Models
- Assets folders where fragments are created
- Universal Editor page authoring
3. Define a DAM path convention, for example:
- /content/dam/<project>/fragments/account-opening/

## 4. Create Content Fragment Models

Navigate in AEM:

1. Tools -> Assets -> Content Fragment Models
2. Select your project configuration folder
3. Create the three models below
4. Save and enable each model

### 4.1 Model: Account Opening Hero

Model name:

- Account Opening Hero

Fields:

1. Eyebrow (Single line text)
2. Title (Single line text)
3. Subtitle (Multi line text)
4. Background Image (Content Reference, images only)
5. CTA Label (Single line text)
6. CTA Link (Single line text)

Validation recommendations:

- Title required
- CTA Label and CTA Link required together
- CTA Link pattern check for absolute URL or site-relative path

### 4.2 Model: Account Opening Accounts

Model name:

- Account Opening Accounts

Fields:

1. Heading (Single line text)
2. Intro (Multi line text)
3. Account 1 Title (Single line text)
4. Account 1 Description (Multi line text)
5. Account 1 Features (Multi line text)
6. Account 2 Title (Single line text)
7. Account 2 Description (Multi line text)
8. Account 2 Features (Multi line text)
9. Account 3 Title (Single line text)
10. Account 3 Description (Multi line text)
11. Account 3 Features (Multi line text)

Authoring rule for features:

- Enter one feature per line in the fragment editor.

### 4.3 Model: Account Opening Form Content

Model name:

- Account Opening Form Content

Fields:

1. Title (Single line text)
2. Subtitle (Multi line text)
3. Submit Label (Single line text)
4. Consent Text (Multi line text)
5. Note (Multi line text)
6. Form Action URL (Single line text)
7. Success Message (Multi line text)

Validation recommendations:

- Title required
- Submit Label required
- Form Action URL required for production

## 5. Create Content Fragments

Navigate in AEM Assets:

1. Assets -> Files
2. Create folders:
- /content/dam/<project>/fragments/account-opening/hero
- /content/dam/<project>/fragments/account-opening/accounts
- /content/dam/<project>/fragments/account-opening/form
3. In each folder click Create -> Content Fragment
4. Pick the corresponding model
5. Enter content values
6. Save and publish

Recommended naming convention:

- hero-account-opening-default
- accounts-account-opening-default
- form-account-opening-default

## 6. Universal Editor Authoring (Page Build)

Open your target page in Universal Editor and author in this order.

### 6.1 Add Hero block

1. Insert Hero block in the first section.
2. Fill fields:
- Eyebrow
- Title
- Subtitle
- Background Image URL
- CTA Label
- CTA Link
3. Publish changes.

### 6.2 Add Accounts block

1. Insert Accounts block below Hero.
2. Fill fields:
- Heading
- Intro
- Account 1 Title / Description / Features
- Account 2 Title / Description / Features
- Account 3 Title / Description / Features
3. For each Features field, use pipe-separated values in UE:
- Example: Feature A|Feature B|Feature C

### 6.3 Add Form block

1. Insert Form block below Accounts.
2. Fill fields:
- Title
- Subtitle
- Submit Label
- Consent Text
- Note
- Form Action URL
- Success Message
3. Publish changes.

## 7. Mapping: Content Fragment -> Universal Editor Fields

Use this mapping while transferring approved content.

### 7.1 Hero

- CF Eyebrow -> UE Eyebrow
- CF Title -> UE Title
- CF Subtitle -> UE Subtitle
- CF Background Image -> UE Background Image URL
- CF CTA Label -> UE CTA Label
- CF CTA Link -> UE CTA Link

### 7.2 Accounts

- CF Heading -> UE Heading
- CF Intro -> UE Intro
- CF Account 1 Title -> UE Account 1 Title
- CF Account 1 Description -> UE Account 1 Description
- CF Account 1 Features (one per line) -> UE Account 1 Features (pipe-separated)
- CF Account 2 Title -> UE Account 2 Title
- CF Account 2 Description -> UE Account 2 Description
- CF Account 2 Features (one per line) -> UE Account 2 Features (pipe-separated)
- CF Account 3 Title -> UE Account 3 Title
- CF Account 3 Description -> UE Account 3 Description
- CF Account 3 Features (one per line) -> UE Account 3 Features (pipe-separated)

### 7.3 Form

- CF Title -> UE Title
- CF Subtitle -> UE Subtitle
- CF Submit Label -> UE Submit Label
- CF Consent Text -> UE Consent Text
- CF Note -> UE Note
- CF Form Action URL -> UE Form Action URL
- CF Success Message -> UE Success Message

## 8. Quality Checklist Before Publish

1. Hero image has meaningful alt in DAM metadata.
2. CTA link is valid and not broken.
3. Account features are concise and consistent.
4. Consent text is legally reviewed.
5. Form action endpoint is correct for the environment.
6. Mobile and desktop rendering verified.
7. Content approved and published.

## 9. Governance Recommendations

1. Keep Content Fragments as the source of truth.
2. Use clear ownership:
- Product/Marketing owns CF content
- Web author owns page composition in UE
3. Version and review fragment updates before page publish.
4. Reuse the same fragments across multiple pages when possible.

## 10. Optional Next Step: Direct CF-Driven Blocks

If you want to remove manual copying, implement block-level CF binding:

1. Add a fragment path field in each block model.
2. Resolve fragment JSON in block JavaScript.
3. Render from fragment values, with optional local overrides.

This gives full enterprise workflow with minimal author duplication.

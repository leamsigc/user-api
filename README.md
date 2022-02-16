# Requirements

- [ ] By the time the page loads we want to populate the results list
      with 25 user entries. The last item must be an option with the
      legend “More results...” that will request another 25 entries and
      append them to the list.

- [ ] On top of the search list, we need a free text input that will filter
      the current results by the user First name or Last name field. We
      also want to be able to filter by their gender. The Api only handles
      “male” and “female” as possible genders.

- [ ] On the results list each user entry should display their name,
      email information and a thumbnail picture of them. The name and
      last name must have their first letter capitalized.

- [ ] When clicking one of the user entries the detailed information

## How to set up locally

1-. Clone the repository
2-. Change to the root directory

```sh
#Install dependencies
npm i
# Start local server
npm run dev
```

## Run test

```sh
# Make sure that you install the dependencies first

# Run unit test
npm run test:unit

# Run end to end test
npm run test:e2e

```

[demo](https://cocky-poitras-6bd047.netlify.app/)

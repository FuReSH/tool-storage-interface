[![Deploy Gatsby site to Pages](https://github.com/FuReSH/tool-storage-interface/actions/workflows/gatsby.yml/badge.svg?branch=main)](https://github.com/FuReSH/tool-storage-interface/actions/workflows/gatsby.yml)

## Data Handling with Gatsby

* https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/conceptual/data-fetching.md

### SPARQL

See JS-Library

* https://zazuko.com/get-started/developers/#further-documentation-support-questions

## Issues

1. At the moment react-json-schema-from doesn't support `patternProperties` of Json Schema
    * see Issue on GitHub: https://github.com/rjsf-team/react-jsonschema-form/issues/1514
    * that means we need a workaround here

## Execute SPARQL queries with `@comunica/query-sparql`

Website of the library: https://comunica.dev/

### Federated query

```bash
npx comunica-sparql https://query.wikidata.org/sparql https://vocabs-downloads.acdh.oeaw.ac.at/vocabs-main/Humanities/TaDiRAH/tadirah.ttl -f ./data/federated-sparql.rq --log-level debug
```


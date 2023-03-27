import * as React from 'react'
import validator from '@rjsf/validator-ajv8';
//import Form from '@rjsf/core';
import Form from '@rjsf/bootstrap-4';
//import Form from '@rjsf/mui';


const FormCard = () => {

    const schema = 
    {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://raw.githubusercontent.com/FuReSH/tool-storage-metadata/main/schemas/tool.schema.json",
        "title": "Tool",
        "version": "0.1.0",
        "description": "A schema to rudimentary describe a digital tool used for research in the humanities",
        "type": "object",
        "properties": {
            "name": {
                "description": "The unique 'speaking' id of the tool. Always lowercase and hyphenated and must match filename.",
                "type": "string",
                "pattern": "^[a-z]{1}[a-z-]+[a-z]{1}$"
            },
            "wikidata-id": {
                "description": "Unique Wikidata identifier. Starts always with prefix Q",
                "type": "string",
                "pattern": "^Q[0-9]+"
            },
            "image": {
                "description": "URLs of the logo in Wikimedia Commons",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "patternProperties": {
                        "(svg|png|jpg|jpeg)": {
                            "type": "string",
                            "pattern": "^(https://upload\\.wikimedia\\.org/wikipedia/commons/).+\\.(svg|png|jpg|jpeg)$",
                            "format": "uri"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "classification": {
                "description": "Standard and internal vocabularies we used to classify our tools.",
                "type": "object",
                "properties": {
                    "smsp-categories": { "$ref": "#/$defs/smsp-category-data" },
                    "tadirah": { "$ref": "#/$defs/tadirah-data" }
                },
                "additionalProperties": false,
                "if": {
                    "properties": {
                        "smsp-categories": {
                            "properties": {
                                "identifiers": {
                                    "items": {
                                        "const": "Q7397"
                                    }
                                }
                            }
                        }
                    },
                    "required": [ "smsp-categories" ]
                },
                "then": { "required": [ "tadirah" ] }
            },
             "qr-code": {
                "description": "",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "patternProperties": {
                        "(svg|png|jpg|jpeg)": {
                            "type": "string",
                            "pattern": "^(https://raw\\.githubusercontent\\.com/FuReSH/tool-storage-metadata/main/assets/qr-code/)[a-z]{1}[a-z-]+(\\.qr\\.(svg|png|jpg|jpeg))$",
                            "format": "uri"
                        }
                    },
                    "additionalProperties": false
                }
             },
            "set-up": { "$comment": "NOTICE: Incomplete, this subschema need to be declared yet!", "$ref": "#/$defs/set-up-data" }
        },
        "additionalProperties": false,
        "required": [ "name", "wikidata-id", "classification" ],
    
    
        "$defs": {
            "smsp-category-data": {
                "title": "Taxonomy of Scholarly Makerspace (smsp) toolboxes, used for internal classification.",
                "description": "Expects Wikidata identifiers.",
                "examples": [ "Q17737", "Q1799072", "Q7397", "Q3966" ],
                "type": "object",
                "properties": {
                    "api-base-url": { 
                        "const": "https://www.wikidata.org/w/rest.php/wikibase/v0", 
                        "readOnly": true
                    },
                    "identifiers": {
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "docHint": "enum",
                            "type": "string",
                            "anyOf": [
                                {"const": "Q17737", "description": "theory"},
                                {"const": "Q1799072", "description": "method"},
                                {"const": "Q7397", "description": "software"},
                                {"const": "Q3966", "description": "hardware"},
                                {"const": "Q9143", "description": "programming language"},
                                {"const": "Q235557", "description": "file format"},
                                {"const": "Q151885", "description": "concept"}
                            ]
                        }
                    }
                },
                "additionalProperties": false,
                "required": [ "identifiers" ]
            },
            "tadirah-data": {
                "title": "Taxonomy of Digital Research Activities in the Humanities (tadirah).",
                "description": "Expects unique TaDiRAH identifiers. See https://vocabs.dariah.eu/tadirah/en/ for a list of all available identifiers.",
                "examples": [ "posTagging", "namedEntityRecognition"],
                "type": "object",
                "properties": {
                    "api-base-url": { "const": "https://vocabs.dariah.eu/tadirah/", "readOnly": true },
                    "identifiers": {
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "pattern": "^[a-z][a-zA-Z]+$"
                        }
                    }
                },
                "additionalProperties": false,
                "required": [ "identifiers" ]
            },
            "set-up-data": {
                "desciption": "",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "properties": {
                        "set-up-type": {
                            "type": "string",
                            "enum": [
                                "docker",
                                "local"
                            ]
                        },
                        "content": {
    
                        }
                    },
                    "additionalProperties": false,
                    "required": [ "set-up-type", "content" ]
                }
            }
        }
    }    
    
    return (
        <Form schema={schema} validator={validator}>
            <div />
        </Form>
    )
}

export default FormCard
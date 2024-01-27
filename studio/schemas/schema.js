/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

// import document schemas/
import blog from './documents/blog';
import category from './documents/category';
import author from './documents/author';
import featured from './documents/featured';
import service from './documents/service';

// import object
import richText from './objects/richText';
import normalText from './objects/normalText';
import customImage from './objects/customImage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // document schemas
    blog,
    category,
    author,
    featured,
    service,

    // object schemas
    normalText,
    richText,
    customImage,
  ]),
});

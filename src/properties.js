/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'LLMs in Software Engineering Literature Collection';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline
 * minTagFrequency: minimum frequency of a tag to be displayed
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
  field: 'keywords',
  title: 'Keywords',
  minTagFrequency: 1
}, {
  field: 'author',
  title: 'Authors',
  minTagFrequency: 1
}, {
  field: 'series',
  title: 'Research Areas',
  minTagFrequency: 1
}];

/**
 * If BibTeX entries and tags should be editable
 * @type {boolean}
 */
var editable = true;

/**
 * Subtitle describing the paper the data is referring to
 * Set to null to deactivate
 * @type {{html: string, id: string}}
 */
var paper = {
  html: 'A literature collection on <b>Large Language Models in Software Engineering</b>',
  id: 'Hou2024LLMSE'
};

/**
 * Extra pages like an about page that will be listed in the footer and can be opened on demand
 */
var extraPages = {
  'about': 'about.html'
};

/**
 * Custom style as path to an extra css file
 * Leave empty if not applicable
 * @type {string}
 */
var customStyle = '';

/**
 * Options for showing citation information
 * Set to null to avoid showing any citation information
 * @type {{minCitationCount: number}}
 */
var citations = null;

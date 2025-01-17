const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
const Years = range(2009, currentYear, 1);
const joiningYears = Years.map(year => { return { label: year, value: year } });
const graduateYears = range(2009, currentYear + 5, 1).map(year => { return { label: year, value: year } });
const departments = [
	{ label: 'Computer Science Engineering', value: 'Computer Science Engineering' },
	{ label: 'Electrical Engineering', value: 'Electrical Engineering' },
	{ label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
	{ label: 'Civil Engineering', value: 'Civil Engineering' },
	{ label: 'Chemistry', value: 'Chemistry' },
	{ label: 'Metallurgy Engineering and Materials Science', value: 'Metallurgy Engineering and Materials Science' },
	{ label: 'VLSI Design and Nanoelectronics', value: 'VLSI Design and Nanoelectronics' },
	{ label: 'Biosciences and Bioengineering', value: 'Biosciences and Bioengineering' },
	{ label: 'Biosciences and Biomedical Engineering', value: 'Biosciences and Biomedical Engineering' },
	{ label: 'HSS', value: 'HSS' },
	{ label: 'Production and Industrial Engineering', value: 'Production and Industrial Engineering' },
	{ label: 'Communication and Signal Processing', value: 'Communication and Signal Processing' },
	{ label: 'Materials Science and Engineering', value: 'Materials Science and Engineering' },
	{ label: 'Psychology', value: 'Psychology' },
	{ label: 'Philosophy', value: 'Philosophy' },
	{ label: 'Economics', value: 'Economics' },
	{ label: 'Mathematics', value: 'Mathematics' },
	{ label: 'Physics', value: 'Physics' },
	{ label: 'Astronomy Astrophysics and Space Engineering', value: 'Astronomy Astrophysics and Space Engineering' }
];
const courses = [
	{ label: 'B.Tech.', value: 'B.Tech.' },
	{ label: 'M.Tech.', value: 'M.Tech.' },
	{ label: 'M.Sc.', value: 'M.Sc.' },
	{ label: 'Ph.D.', value: 'Ph.D.' },
	{ label: 'MS (Research)', value: 'MS (Research)' }
];
const countryList = [
	{ label: "Afghanistan", value: "Afghanistan" },
	{ label: "Albania", value: "Albania" },
	{ label: "Algeria", value: "Algeria" },
	{ label: "American Samoa", value: "American Samoa" },
	{ label: "Andorra", value: "Andorra" },
	{ label: "Angola", value: "Angola" },
	{ label: "Anguilla", value: "Anguilla" },
	{ label: "Antarctica", value: "Antarctica" },
	{ label: "Argentina", value: "Argentina" },
	{ label: "Australia", value: "Australia" },
	{ label: "Austria", value: "Austria" },
	{ label: "Bahrain", value: "Bahrain" },
	{ label: "Bangladesh", value: "Bangladesh" },
	{ label: "Belgium", value: "Belgium" },
	{ label: "Bermuda", value: "Bermuda" },
	{ label: "Bhutan", value: "Bhutan" },
	{ label: "Bolivia", value: "Bolivia" },
	{ label: "Brazil", value: "Brazil" },
	{ label: "Bulgaria", value: "Bulgaria" },
	{ label: "Burundi", value: "Burundi" },
	{ label: "Cambodia", value: "Cambodia" },
	{ label: "Cameroon", value: "Cameroon" },
	{ label: "Canada", value: "Canada" },
	{ label: "Chile", value: "Chile" },
	{ label: "Colombia", value: "Colombia" },
	{ label: "Costa Rica", value: "Costa Rica" },
	{ label: "Croatia", value: "Croatia" },
	{ label: "Cuba", value: "Cuba" },
	{ label: "Denmark", value: "Denmark" },
	{ label: "Dominican Republic", value: "Dominican Republic" },
	{ label: "Ecuador", value: "Ecuador" },
	{ label: "Egypt", value: "Egypt" },
	{ label: "Estonia", value: "Estonia" },
	{ label: "Ethiopia", value: "Ethiopia" },
	{ label: "Finland", value: "Finland" },
	{ label: "France", value: "France" },
	{ label: "Georgia", value: "Georgia" },
	{ label: "Germany", value: "Germany" },
	{ label: "Ghana", value: "Ghana" },
	{ label: "Greece", value: "Greece" },
	{ label: "Guinea", value: "Guinea" },
	{ label: "Hong Kong", value: "Hong Kong" },
	{ label: "Hungary", value: "Hungary" },
	{ label: "India", value: "India" },
	{ label: "Indonesia", value: "Indonesia" },
	{ label: "Iran", value: "Iran" },
	{ label: "Iraq", value: "Iraq" },
	{ label: "Ireland", value: "Ireland" },
	{ label: "Israel", value: "Israel" },
	{ label: "Italy", value: "Italy" },
	{ label: "Jamaica", value: "Jamaica" },
	{ label: "Japan", value: "Japan" },
	{ label: "Jordan", value: "Jordan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: "Japan", value: "Japan" },
	{ label: 'Kazakhstan', value: 'Kazakhstan' },
	{ label: 'Kenya', value: 'Kenya' },
	{ label: 'Kiribati', value: 'Kiribati' },
	{ label: "Korea (the Democratic People's Republic of) ", value: "Korea(the Democratic People's Republic of)"},
	{ label: 'Korea (the Republic of)', value: 'Korea (the Republic of)' },
	{ label: 'Kuwait', value: 'Kuwait' },
	{ label: 'Kyrgyzstan', value: 'Kyrgyzstan' },
	{ label: "Lao People's Democratic Republic(the)", value: "Lao People's Democratic Republic (the)"},
	{ label: 'Latvia', value: 'Latvia' },
	{ label: 'Lebanon', value: 'Lebanon' },
	{ label: 'Lesotho', value: 'Lesotho' },
	{ label: 'Liberia', value: 'Liberia' },
	{ label: 'Libya', value: 'Libya' },
	{ label: 'Liechtenstein', value: 'Liechtenstein' },
	{ label: 'Lithuania', value: 'Lithuania' },
	{ label: 'Luxembourg', value: 'Luxembourg' },
	{ label: 'Macao', value: 'Macao' },
	{ label: 'Madagascar', value: 'Madagascar' },
	{ label: 'Malawi', value: 'Malawi' },
	{ label: 'Malaysia', value: 'Malaysia' },
	{ label: 'Maldives', value: 'Maldives' },
	{ label: 'Mali', value: 'Mali' },
	{ label: 'Malta', value: 'Malta' },
	{ label: 'Marshall Islands (the)', value: 'Marshall Islands (the)' },
	{ label: 'Martinique', value: 'Martinique' },
	{ label: 'Mauritania', value: 'Mauritania' },
	{ label: 'Mauritius', value: 'Mauritius' },
	{ label: 'Mayotte', value: 'Mayotte' },
	{ label: 'Mexico', value: 'Mexico' },
	{ label: 'Micronesia (Federated States of)', value: 'Micronesia (Federated States of)' },
	{ label: 'Moldova (the Republic of)', value: 'Moldova (the Republic of)' },
	{ label: 'Monaco', value: 'Monaco' },
	{ label: 'Mongolia', value: 'Mongolia' },
	{ label: 'Montenegro', value: 'Montenegro' },
	{ label: 'Montserrat', value: 'Montserrat' },
	{ label: 'Morocco', value: 'Morocco' },
	{ label: 'Mozambique', value: 'Mozambique' },
	{ label: 'Myanmar', value: 'Myanmar' },
	{ label: 'Namibia', value: 'Namibia' },
	{ label: 'Nauru', value: 'Nauru' },
	{ label: 'Nepal', value: 'Nepal' },
	{ label: 'Netherlands (the)', value: 'Netherlands (the)' },
	{ label: 'New Caledonia', value: 'New Caledonia' },
	{ label: 'New Zealand', value: 'New Zealand' },
	{ label: 'Nicaragua', value: 'Nicaragua' },
	{ label: 'Niger (the)', value: 'Niger (the)' },
	{ label: 'Nigeria', value: 'Nigeria' },
	{ label: 'Niue', value: 'Niue' },
	{ label: 'Norfolk Island', value: 'Norfolk Island' },
	{ label: 'Northern Mariana Islands (the)', value: 'Northern Mariana Islands (the)' },
	{ label: 'Norway', value: 'Norway' },
	{ label: 'Oman', value: 'Oman' },
	{ label: 'Pakistan', value: 'Pakistan' },
	{ label: 'Palau', value: 'Palau' },
	{ label: 'Palestine, State of', value: 'Palestine, State of' },
	{ label: 'Panama', value: 'Panama' },
	{ label: 'Papua New Guinea', value: 'Papua New Guinea' },
	{ label: 'Paraguay', value: 'Paraguay' },
	{ label: 'Peru', value: 'Peru' },
	{ label: 'Philippines (the)', value: 'Philippines (the)' },
	{ label: 'Pitcairn', value: 'Pitcairn' },
	{ label: 'Poland', value: 'Poland' },
	{ label: 'Portugal', value: 'Portugal' },
	{ label: 'Puerto Rico', value: 'Puerto Rico' },
	{ label: 'Qatar', value: 'Qatar' },
	{ label: 'Republic of North Macedonia', value: 'Republic of North Macedonia' },
	{ label: 'Romania', value: 'Romania' },
	{ label: 'Russian Federation (the)', value: 'Russian Federation (the)' },
	{ label: 'Rwanda', value: 'Rwanda' },
	{ label: 'R├⌐union', value: 'R├⌐union' },
	{ label: 'Saint Barth├⌐lemy', value: 'Saint Barth├⌐lemy' },
	{ label: 'Saint Helena, Ascension and Tristan da Cunha', value: 'Saint Helena, Ascension and Tristan da Cunha' },
	{ label: 'Saint Kitts and Nevis', value: 'Saint Kitts and Nevis' },
	{ label: 'Saint Lucia', value: 'Saint Lucia' },
	{ label: 'Saint Martin (French part)', value: 'Saint Martin (French part)' },
	{ label: 'Saint Pierre and Miquelon', value: 'Saint Pierre and Miquelon' },
	{ label: 'Saint Vincent and the Grenadines', value: 'Saint Vincent and the Grenadines' },
	{ label: 'Samoa', value: 'Samoa' },
	{ label: 'San Marino', value: 'San Marino' },
	{ label: 'Sao Tome and Principe', value: 'Sao Tome and Principe' },
	{ label: 'Saudi Arabia', value: 'Saudi Arabia' },
	{ label: 'Senegal', value: 'Senegal' },
	{ label: 'Serbia', value: 'Serbia' },
	{ label: 'Seychelles', value: 'Seychelles' },
	{ label: 'Sierra Leone', value: 'Sierra Leone' },
	{ label: 'Singapore', value: 'Singapore' },
	{ label: 'Sint Maarten (Dutch part)', value: 'Sint Maarten (Dutch part)' },
	{ label: 'Slovakia', value: 'Slovakia' },
	{ label: 'Slovenia', value: 'Slovenia' },
	{ label: 'Solomon Islands', value: 'Solomon Islands' },
	{ label: 'Somalia', value: 'Somalia' },
	{ label: 'South Africa', value: 'South Africa' },
	{ label: 'South Georgia and the South Sandwich Islands', value: 'South Georgia and the South Sandwich Islands' },
	{ label: 'South Sudan', value: 'South Sudan' },
	{ label: 'Spain', value: 'Spain' },
	{ label: 'Sri Lanka', value: 'Sri Lanka' },
	{ label: 'Sudan (the)', value: 'Sudan (the)' },
	{ label: 'Suriname', value: 'Suriname' },
	{ label: 'Svalbard and Jan Mayen', value: 'Svalbard and Jan Mayen' },
	{ label: 'Sweden', value: 'Sweden' },
	{ label: 'Switzerland', value: 'Switzerland' },
	{ label: 'Syrian Arab Republic', value: 'Syrian Arab Republic' },
	{ label: 'Taiwan', value: 'Taiwan' },
	{ label: 'Tajikistan', value: 'Tajikistan' },
	{ label: 'Tanzania, United Republic of', value: 'Tanzania, United Republic of' },
	{ label: 'Thailand', value: 'Thailand' },
	{ label: 'Timor-Leste', value: 'Timor-Leste' },
	{ label: 'Togo', value: 'Togo' },
	{ label: 'Tokelau', value: 'Tokelau' },
	{ label: 'Tonga', value: 'Tonga' },
	{ label: 'Trinidad and Tobago', value: 'Trinidad and Tobago' },
	{ label: 'Tunisia', value: 'Tunisia' },
	{ label: 'Turkey', value: 'Turkey' },
	{ label: 'Turkmenistan', value: 'Turkmenistan' },
	{ label: 'Turks and Caicos Islands (the)', value: 'Turks and Caicos Islands (the)' },
	{ label: 'Tuvalu', value: 'Tuvalu' },
	{ label: 'Uganda', value: 'Uganda' },
	{ label: 'Ukraine', value: 'Ukraine' },
	{ label: 'United Arab Emirates (the)', value: 'United Arab Emirates (the)' },
	{ label: 'United Kingdom of Great Britain and Northern Ireland (the)', value: 'United Kingdom of Great Britain and Northern Ireland (the)' },
	{ label: 'United States Minor Outlying Islands (the)', value: 'United States Minor Outlying Islands (the)' },
	{ label: 'United States of America (the)', value: 'United States of America (the)' },
	{ label: 'Uruguay', value: 'Uruguay' },
	{ label: 'Uzbekistan', value: 'Uzbekistan' },
	{ label: 'Vanuatu', value: 'Vanuatu' },
	{ label: 'Venezuela (Bolivarian Republic of)', value: 'Venezuela (Bolivarian Republic of)' },
	{ label: 'Viet Nam', value: 'Viet Nam' },
	{ label: 'Virgin Islands (British)', value: 'Virgin Islands (British)' },
	{ label: 'Virgin Islands (U.S.)', value: 'Virgin Islands (U.S.)' },
	{ label: 'Wallis and Futuna', value: 'Wallis and Futuna' },
	{ label: 'Western Sahara', value: 'Western Sahara' },
	{ label: 'Yemen', value: 'Yemen' },
	{ label: 'Zambia', value: 'Zambia' },
	{ label: 'Zimbabwe', value: 'Zimbabwe' },
	{ label: 'Aland Islands', value: 'Aland Islands' }
];

const companyNames = [
	{ label: "Facebook", value: "Facebook" },
	{ label: "Google", value: "Google" },
	{ label: "Microsoft", value: "Microsoft" },
	{ label: "Amazon", value: "Amazon" },
	{ label: "Qualcomm", value: "Qualcomm" },
	{ label: "Walmart", value: "Walmart" },
	{ label: "Groupon", value: "Groupon" },
	{ label: "Cisco", value: "Cisco" },
	{ label: "Progress Software", value: "Progress Software" },
	{ label: "Factset", value: "Factset" },
	{ label: "Infosys Labs", value: "Infosys Labs" },
	{ label: "Adobe", value: "Adobe" },
	{ label: "Tata Research", value: "Tata Research" },
	{ label: "Goldman Sachs", value: "Goldman Sachs" },
	{ label: "JP Morgan Chase", value: "JP Morgan Chase" },
	{ label: "Citigroup", value: "Citigroup" },
	{ label: "Crypsis", value: "Crypsis" },
	{ label: "SETU Software Systems", value: "SETU Software Systems" },
	{ label: "Clapone", value: "Clapone" },
	{ label: "Perceptive Analytics", value: "Perceptive Analytics" },
	{ label: "Netflix", value: "Netflix" },
	{ label: "Uber", value: "Uber" },
	{ label: "Swiggy", value: "Swiggy" },
	{ label: "Zomato", value: "Zomato" },
	{ label: "IBM Research India", value: "IBM Research India" },
	{ label: "Apple", value: "Apple" },
	{ label: "DE Shaw", value: "DE Shaw" }
]

const skills = [
	{ label: "Technical writing", value: "Technical writing" },
	{ label: "Social media management", value: "Social media management" },
	{ label: "Coding", value: "Coding" },
	{ label: "Network configuration", value: "Network configuration" },
	{ label: "Hardware deployment", value: "Hardware deployment" },
	{ label: "Operating system knowledge", value: "Operating system knowledge" },
	{ label: "Database management", value: "Database management" },
	{ label: "Communication", value: "Communication" },
	{ label: "Organization", value: "Organization" },
	{ label: "Analytical abilities", value: "Analytical abilities" },
	{ label: "Creativity", value: "Creativity" },
	{ label: "Project management", value: "Project management" },
	{ label: "Tenacity", value: "Tenacity" },
	{ label: "Problem-solving", value: "Problem-solving" },
	{ label: "Resourcefulness", value: "Resourcefulness" },
	{ label: "Leadership", value: "Leadership" },
	{ label: "Flexibility", value: "Flexibility" }

]

export { joiningYears, graduateYears, departments, courses, countryList, companyNames, skills };
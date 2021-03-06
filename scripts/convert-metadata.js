/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*     http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fs = require('fs');
var jsonFile = process.argv[2];

// Input file
if (jsonFile == undefined) {
	console.error('Please specify a JSON file to parse!');
	process.exit(1);
}
if (!fs.existsSync(jsonFile)) {
	console.error('Specified file does not exist!', jsonFile);
	process.exit(2);
}

var output = {};
var data = require('./' + jsonFile);
for (var i = 0; i < data.length; i++) {
	var id = data[i].id;
	delete data[i].id;
	output[id] = data[i];
	
}

fs.writeFileSync('metadata-converted.json', JSON.stringify(output));
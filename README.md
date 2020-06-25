# GraphQL (Azure Func) version of GurbaniNow API

### GraphQL API for Gurbani based on ⚡️ 🙏 Fast and Powerful Gurbani and Shabad RESTful API used by [GurbaniNow Search](https://gurbaninow.com)

[![GitHub license](https://img.shields.io/github/license/GurbaniNow/api)](https://github.com/GurbaniNow/api/blob/master/LICENSE)
[![Slack](https://img.shields.io/badge/Slack-join%20the%20conversation-B649AB.svg)](https://chat.shabados.com)
<img src="https://raw.githubusercontent.com/Azure/azure-functions-cli/master/src/Azure.Functions.Cli/npm/assets/azure-functions-logo-color-raster.png" width="30">

> Note: I just made this for fun. If you are planning to use for your app I highly recommend you to use GurbaniNow RESTful API located at [api.gurbaninow.com](https://api.gurbaninow.com) instead of this because this is DEVELOPED FOR EXPLORATION PURPOSES ONLY.

## About
An Apollo Server based GraphQL running as Azure Function powered by the open-source [Shabad OS Database](https://github.com/ShabadOS/database), which provides one the most accurate and correct Gurbani databases available.

If you need help, have an issue, or would like to request an feature, please submit an issue

Contact us on Slack! [chat.shabados.com](https://chat.shabados.com)

## Development
* Clone this project
* Install the recommended extensions from [`extensions.json`](.vscode/extensions.json). You can also use [microsoft docs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code?pivots=programming-language-python) and install all the prequisites.
* Create a `local.settings.json` file in root directory of this project and add your Sendgrid API key. Fill in required fields the [`local.settings.json.example`](local.settings.json.example)
* Start debugging or F5 and you should have this running on http://localhost:7071/graphql

## Documentation

Checkout the GraphQL Playground for schema.

## Licence

GurbaniNow API Copyright © 2015-2020 GurbaniNow Dev Team. All Rights Reserved.

Gurbani and Shabad Data is provided by the [Shabad OS Database](https://github.com/ShabadOS/database). Please check licening info from their [repository](https://github.com/ShabadOS/database#licenses).

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, as per version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

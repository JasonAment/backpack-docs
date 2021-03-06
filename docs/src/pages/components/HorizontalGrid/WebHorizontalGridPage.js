/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import BpkBlockquote from 'bpk-component-blockquote';
import BpkRouterLink from 'bpk-component-router-link';
import BpkText, { WEIGHT_STYLES } from 'bpk-component-text';
import gridReadme from 'bpk-component-grid/README.md';

import * as routes from '../../../constants/routes';
import WebComponentPage from '../../../components/ComponentPage';
import BpkParagraph from '../../../components/Paragraph';
import Code from '../../../components/Code';

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <BpkText tagName="h3" textStyle="base" weight={WEIGHT_STYLES.bold}>
        Columns
      </BpkText>,
      <BpkParagraph>
        The grid makes use of 12 percentage based columns, which means your
        layouts will scale no matter the browser size. Columns are separated by
        fixed width gutters and margins.
      </BpkParagraph>,
      <BpkParagraph>
        <BpkRouterLink to={routes.GRID_COLUMN_DEMO}>View demo.</BpkRouterLink>
      </BpkParagraph>,
      <BpkText tagName="h3" textStyle="base" weight={WEIGHT_STYLES.bold}>
        Offsets
      </BpkText>,
      <BpkParagraph>
        Offsets allow you to shift columns to the right. Depending on their
        size, columns can be offset by 1 through 11.
      </BpkParagraph>,
      <BpkParagraph>
        <BpkRouterLink to={routes.GRID_OFFSET_DEMO}>View demo.</BpkRouterLink>
      </BpkParagraph>,
      <BpkText tagName="h3" textStyle="base" weight={WEIGHT_STYLES.bold}>
        Responsive behaviour
      </BpkText>,
      <BpkParagraph>
        The grid works in conjunction with the{' '}
        {
          <BpkRouterLink to={routes.BREAKPOINT}>
            Breakpoint component
          </BpkRouterLink>
        }{' '}
        and can be used to position content differently based on these viewports
        by specifying different widths and offsets.
      </BpkParagraph>,
      <BpkBlockquote>
        <strong>Note:</strong> The Backpack grid is intended to be used for
        overall page layout as opposed to spacing out atom or molecule level
        components. Please stick to flexbox based techniques for more intricate
        layouts (or <Code>display: table;</Code> for browsers which lack
        support), just be sure to use the spacing values above in order to
        achieve consistency.
      </BpkBlockquote>,
    ],
  },
];

const WedHorizontalGridPage = () => (
  <WebComponentPage
    examples={components}
    readme={gridReadme}
    sassdocId="grids"
    packageName="bpk-component-grid"
  />
);

export default WedHorizontalGridPage;

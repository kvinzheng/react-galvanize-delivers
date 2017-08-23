import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuComponent from './MenuComponent';
import './MenuComponent.story.css';
import data from '../data/data.JSON';

let menuItems = data.menuItems;

storiesOf('MenuComponent', module).add('Happy Path', () => <MenuComponent items={menuItems} />);

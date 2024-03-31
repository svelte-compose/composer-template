#!/usr/bin/env node

import { defineComposer } from '@svelte-compose/core';
import { composer } from './config/composer.js';
import { checks } from './config/checks.js';

export default defineComposer(composer, checks);

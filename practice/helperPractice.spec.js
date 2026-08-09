import { test } from '@playwright/test';
import { Helper } from '../utils/helper';

test('Helper Practice', async () => {

    const helper = new Helper();

    console.log(helper.getCurrentDate());

    console.log(helper.randomNumber());

    console.log(helper.randomEmail());

});
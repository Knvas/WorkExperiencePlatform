'use client'

import React from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";

const Setting = () => {
  return (
    <div>
      <Card
        shadow={'none'}
        className="bg-white border px-2 mt-5"
      >
        <CardHeader>
          <div className="uppercase">
            Account Settings
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-5">
            <Input
              variant={'bordered'}
              type="email"
              label="Company Name"
              value={'Knvas'}
              size={'md'}
              className="rounded-md"
              classNames={{
                mainWrapper:  'bg-white',
                base:  'bg-white',
                inputWrapper:  'bg-white border border-default-200',
                innerWrapper:  'bg-white',
                input: 'font-medium',
                label: 'text-sm'
              }}
            />
            <div />
            <Input
              variant={'bordered'}
              type="email"
              label="Company Name"
              value={'Knvas'}
              size={'md'}
              className="rounded-md"
              classNames={{
                mainWrapper:  'bg-white',
                base:  'bg-white',
                inputWrapper:  'bg-white border border-default-200',
                innerWrapper:  'bg-white',
                input: 'font-medium',
                label: 'text-sm'
              }}
            />
            <Input
              variant={'bordered'}
              type="email"
              label="Company Name"
              value={'Knvas'}
              size={'md'}
              className="rounded-md"
              classNames={{
                mainWrapper:  'bg-white',
                base:  'bg-white',
                inputWrapper:  'bg-white border border-default-200',
                innerWrapper:  'bg-white',
                input: 'font-medium',
                label: 'text-sm'
              }}
            />
          </div>
        </CardBody>
      </Card>

      <div className="mt-5 flex items-center justify-center">
        <Button color="primary">Save</Button>
      </div>

    </div>
  );
};

export default Setting;
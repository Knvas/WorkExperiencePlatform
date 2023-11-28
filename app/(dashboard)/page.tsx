'use client'

import React, {useState} from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Avatar, Button, Checkbox, CheckboxGroup, Divider} from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/input";
import { FolderIcon } from '@heroicons/react/24/outline'


const Home = () => {

  const [update, setUpdate] = React.useState(false)


  return (
    <div className="grid grid-cols-9 gap-x-3">
      <div className={update ? `col-span-9`: 'col-span-6'}>
        <Card
          shadow={'none'}
          className="bg-white/[0.80] border px-2"
        >
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <h2 className="font-semibold uppercase">Overview</h2>
              <Button
                size={'md'}
                color={'danger'}
                className="px-10 text-base"
              >
                Pending
              </Button>
            </div>
          </CardHeader>

          <CardBody>

            <div>
              <div className="uppercase">Personal Information</div>
              <div className="flex items-end justify-between">
                <div className="flex items-center space-x-5">
                  <div className="bg-white w-48 h-48 flex items-center justify-center rounded-xl border mt-4 p-10">
                    <Avatar
                      isBordered
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      className="w-full h-full"
                    />
                  </div>
                  {
                    update && (
                      <div className="space-x-2">
                        <Button onClick={() => setUpdate(true)} className="bg-gray-900 text-white">
                          Upload New Picture
                        </Button>
                        <Button onClick={() => setUpdate(true)} color={'danger'}>
                          Delete
                        </Button>
                      </div>
                    )
                  }

                </div>

                {
                  !update && (
                    <Button onClick={() => setUpdate(true)} color={'primary'}>
                      Update Information
                    </Button>
                  )
                }

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Full Name"
                  value={'John Doe'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Gender"
                  value={'Male'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Date of Birth"
                  value={'12/31/1990'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Year Group"
                  value={'2023'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />


              </div>
            </div>
          </CardBody>
        </Card>

        <Card
          shadow={'none'}
          className="bg-white border px-2 mt-5"
        >
          <CardHeader>
            <div className="uppercase">
              Contact Information
            </div>
          </CardHeader>

          <CardBody>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="email"
                  label="Email"
                  value={'johndoe@gmail.com'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Phone Number"
                  value={'+233 550 220 451'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Guardian Name"
                  value={'John Doe'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Guardian Phone Number"
                  value={'+233 550 220 451'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="email"
                  label="Guardian Email"
                  value={'johndoe@gmail.com'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="email"
                  label="Name of School"
                  value={'Biddick Hall Junior School'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="email"
                  label="School Email"
                  value={'school@gmail.com'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="School Phone Number"
                  value={'+233 550 220 451'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="School Address"
                  value={'4517 Washington Ave. Manchester, Kentucky 39495'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Supervisor"
                  value={'Brooklyn Simmons'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Tutor Group"
                  value={'Group A'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />


              </div>



            </div>


          </CardBody>
        </Card>

        <Card
          shadow={'none'}
          className="bg-white border px-2 mt-5"
        >
          <CardHeader>
            <div className="uppercase">
              Medical Information
            </div>
          </CardHeader>
          <CardBody>
            {
              update ? (
                <div className="space-y-5">
                  <div className="space-y-3">
                    <div className="text-sm">
                      Please select the medical conditions that applies to you
                    </div>
                    <CheckboxGroup

                      label=""
                      defaultValue={["buenos-aires", "london"]}
                    >
                      <Checkbox size={'sm'} value="buenos-aires">Asthma</Checkbox>
                      <Checkbox size={'sm'} value="sydney">Sickle Cell</Checkbox>
                      <Checkbox size={'sm'} value="san-francisco">Diabetes</Checkbox>
                      <Checkbox size={'sm'} value="london">Epilepsy</Checkbox>
                      <Checkbox size={'sm'} value="tokyo">Other</Checkbox>
                    </CheckboxGroup>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm">
                      Let us know about the other medical condition bellow
                    </div>

                    <Textarea
                      variant={'flat'}
                      label=""
                      labelPlacement="outside"
                      placeholder="Enter your description"
                      defaultValue=""
                      className="w-full"
                    />
                  </div>


                </div>
              ) : (
                <div className="text-sm">No information given</div>
              )
            }

          </CardBody>
        </Card>

        <Card
          shadow={'none'}
          className="bg-white border px-2 mt-5"
        >
          <CardHeader>
            <div className="uppercase">
              Special Educational Needs
            </div>
          </CardHeader>
          <CardBody>
            {
              update ? (
                <div className="space-y-5">
                  <div className="space-y-3">
                    <div className="text-sm">
                      Please select the special educational needs that applies to you
                    </div>
                    <div className="grid grid-cols-3">
                      <CheckboxGroup
                        label=""
                        defaultValue={["buenos-aires", "london"]}
                      >
                        <Checkbox size={'sm'} value="buenos-aires">Learning disability</Checkbox>
                        <Checkbox size={'sm'} value="sydney">ADHD</Checkbox>
                        <Checkbox size={'sm'} value="san-francisco">Intellectual disability</Checkbox>
                        <Checkbox size={'sm'} value="london">Dyscalculia</Checkbox>
                        <Checkbox size={'sm'} value="tokyo">Cerebral palsy</Checkbox>
                        <Checkbox size={'sm'} value="tokyo">Dyscalculia</Checkbox>
                      </CheckboxGroup>

                      <CheckboxGroup
                        label=""
                        defaultValue={["buenos-aires", "london"]}
                      >
                        <Checkbox size={'sm'} value="buenos-aires">Dysgraphia</Checkbox>
                        <Checkbox size={'sm'} value="sydney">Autism spectrum disorder</Checkbox>
                        <Checkbox size={'sm'} value="san-francisco">Dyslexia</Checkbox>
                        <Checkbox size={'sm'} value="london">Multiple disabilities</Checkbox>
                        <Checkbox size={'sm'} value="tokyo">Dyspraxia</Checkbox>
                        <Checkbox size={'sm'} value="tokyo">Other</Checkbox>
                      </CheckboxGroup>

                      <CheckboxGroup
                        label=""
                        defaultValue={["buenos-aires", "london"]}
                      >
                        <Checkbox size={'sm'} value="buenos-aires">Deafblindness</Checkbox>
                        <Checkbox size={'sm'} value="sydney">Asperger syndrome</Checkbox>
                        <Checkbox size={'sm'} value="san-francisco">Visual impairment</Checkbox>
                        <Checkbox size={'sm'} value="london">Physical disability</Checkbox>
                        <Checkbox size={'sm'} value="tokyo">Developmental delay</Checkbox>
                      </CheckboxGroup>
                    </div>

                  </div>

                  <div className="space-y-3">
                    <div className="text-sm">
                      Let us know about the other special educational needs bellow
                    </div>

                    <Textarea
                      variant={'flat'}
                      label=""
                      labelPlacement="outside"
                      placeholder="Enter your description"
                      defaultValue=""
                      className="w-full"
                    />
                  </div>
                </div>
              ) : (
                <div className="text-sm">No information given</div>
              )
            }
          </CardBody>
        </Card>

        <Card
          shadow={'none'}
          className="bg-white border px-2 mt-5"
        >
          <CardHeader>
            <div className="uppercase">
              Employer Information
            </div>
          </CardHeader>

          <CardBody>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="email"
                  label="Company Name"
                  value={'Knvas'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Industry"
                  value={'Information Technology'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Company Phone Number"
                  value={'+233 550 220 451'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="email"
                  label="Company Email"
                  value={'johndoe@gmail.com'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Company Address"
                  value={'4517 Washington Ave. Manchester, Kentucky 39495'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />

                <Input
                  variant={update ? 'flat' : 'bordered'}
                  isReadOnly={!update}
                  type="text"
                  label="Role"
                  value={'Secretary'}
                  size={'md'}
                  className="rounded-md"
                  classNames={{
                    mainWrapper: update ? '' : 'bg-white',
                    base: update ? '': 'bg-white',
                    inputWrapper: update ? '' : 'bg-white border border-default-200',
                    innerWrapper: update ? '' : 'bg-white',
                    input: 'font-medium',
                    label: 'text-sm'
                  }}
                />
              </div>


            </div>
          </CardBody>
        </Card>

        {
          update ? (
            <Card
              shadow={'none'}
              className="bg-white border px-2 mt-5"
            >
              <CardHeader >
                <div className="uppercase">
                  Employer Insurance Certificate
                </div>

              </CardHeader>
              <CardBody className="space-y-5">
                <div>
                  <Checkbox size={'sm'} value="buenos-aires">Select if not applicable</Checkbox>
                </div>

                <div>
                  <Input
                    variant={update ? 'flat' : 'bordered'}
                    isReadOnly={!update}
                    type="text"
                    label="Name of Insurance Company"
                    value={'Name of Insurance Company'}
                    size={'md'}
                    className="rounded-md"
                    classNames={{
                      mainWrapper: update ? '' : 'bg-white',
                      base: update ? '': 'bg-white',
                      inputWrapper: update ? '' : 'bg-white border border-default-200',
                      innerWrapper: update ? '' : 'bg-white',
                      input: 'font-medium',
                      label: 'text-sm'
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm text-gray-500">Upload document</div>
                  <div className="border border-dashed w-1/4 h-32 flex items-center justify-center rounded-lg mt-3 cursor-pointer">
                    <FolderIcon className="w-10 h-10 text-gray-500" />
                  </div>
                </div>



              </CardBody>
            </Card>
          ) : (
            <Card
              shadow={'none'}
              className="bg-white border px-2 mt-5"
            >
              <CardHeader>
                <div className="uppercase">
                  Insurance Information
                </div>
              </CardHeader>
              <CardBody>
                {
                  update ? (
                    <div>Update</div>
                  ) : (
                    <div className="text-sm">No information given</div>
                  )
                }

              </CardBody>
            </Card>
          )
        }



        {
          update && (
            <div className="py-5 flex items-center justify-center space-x-4">
              <Button color="primary" variant={'bordered'}>Save</Button>
              <Button color="primary">Submit</Button>
            </div>
          )
        }




      </div>
      {
        !update && (
          <div className="col-span-3 space-y-4">
            <Card
              shadow={'none'}
              className="p-3 border">
              <CardHeader className="font-semibold">
                Assignment Progress
              </CardHeader>
              <Divider />
              <CardBody>

              </CardBody>
            </Card>

            <Card
              shadow={'none'}
              className="p-3 border">
              <CardHeader className="font-semibold">
                Notifications
              </CardHeader>
              <Divider />
              <CardBody>

              </CardBody>
            </Card>
          </div>
        )
      }

    </div>
  );
};

export default Home;
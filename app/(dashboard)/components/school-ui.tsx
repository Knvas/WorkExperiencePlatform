'use client'

import React from 'react';
import InfoCard from "@/components/info-card";
import TeacherIcon from "@/components/icons/teacher";
import Approved from "@/components/icons/approved";
import Pending from "@/components/icons/pending";
import Declined from "@/components/icons/declined";
import {Button, Card, CardBody, CardHeader, divider, Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import Progress from "@/components/progress";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import('react-plotly.js') , {
  ssr: false
})


const SchoolUi = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-5 gap-x-5">
        <InfoCard
          icon={<TeacherIcon />}
          quantity={10000}
          title={'Total Students'}
        />

        <InfoCard
          icon={<Approved />}
          quantity={6500}
          title={'Approved'}
        />

        <InfoCard
          icon={<Pending />}
          quantity={2500}
          title={'Pending'}
        />

        <InfoCard
          icon={<Declined />}
          quantity={1000}
          title={'Declined'}
        />
        <div className="bg-white rounded-lg p-6 space-y-1">
          <Button
            size={'sm'}
            color={'primary'}
            className="w-full"
          >
            Add Student
          </Button>
          <Button
            size={'sm'}
            className={'w-full text-white bg-gray-900'}
          >Upload CSV</Button>
        </div>

      </div>
      <div className="grid grid-cols-10 gap-x-3">
        <Card
          className="col-span-7"
          shadow={'none'}>
          <CardHeader>
            <div className="text-gray-900 font-semibold">
              Overview
            </div>

          </CardHeader>
          <CardBody>
            <Table
              fullWidth
              classNames={{th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],}}
              removeWrapper
              shadow={'none'}
              className="divide-y divide-y-4"
              aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Student Name</TableColumn>
                <TableColumn>Year Group</TableColumn>
                <TableColumn>Employer</TableColumn>
                <TableColumn>Assignment Progress</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Darlene Robertson</TableCell>
                  <TableCell>Year 10</TableCell>
                  <TableCell>Bank Of America</TableCell>
                  <TableCell><Progress /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
        </Card>

        <div className="col-span-3 space-y-3">
          <Card
            shadow={'none'}
            className="px-1 border">
            <CardHeader className="font-semibold">
              Notifications
            </CardHeader>
            <Divider />
            <CardBody>

            </CardBody>
          </Card>

          <Card
            shadow={'none'}
            className="px-1 border">
            <CardHeader className="font-semibold">
              Student Progress for 2023
            </CardHeader>
            <Divider />
            <CardBody>
              <div className='scale-150'>
                <Plot
                  data={[
                    {
                      values: [65, 25,10,],
                      labels: ['Approved', 'Pending', 'Declined'],
                      domain: {column: 10},
                      name: 'GHG Emissions',
                      hoverinfo: 'label+percent',
                      hole: .70,
                      type: 'pie',
                      marker: {
                        colors: ['#0D7D25', '#9747FF', '#CB1F1F'],
                        line: {
                          color: 'white',
                          width: 2,
                        },
                      },
                    }
                  ]}

                  layout={{
                    width: 320,
                    height: 320,
                    showlegend: false,
                    annotations: [
                      {
                        font: {
                          size: 8,
                        },
                        showarrow: false,
                        text: `Total Students`,
                        x: 0.50,
                        y: 0.55,
                        align: 'center'
                      },
                      {
                        font: {
                          size: 16
                        },
                        showarrow: false,
                        text: `10000`,
                        x: 0.50,
                        y: 0.45,
                        align: 'center'
                      },
                    ],
                  }}
                />
              </div>


            </CardBody>
          </Card>

        </div>

      </div>
    </div>
  );
};

export default SchoolUi;
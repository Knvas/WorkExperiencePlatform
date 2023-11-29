'use client'

import React from 'react';
import InfoCard from "@/components/info-card";
import TeacherIcon from "@/components/icons/teacher";
import Approved from "@/components/icons/approved";
import Pending from "@/components/icons/pending";
import Declined from "@/components/icons/declined";
import {Button, Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

import Progress from "@/components/progress";

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
      <div className="grid grid-cols-10">
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
              classNames={{
                th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
              }}
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


      </div>
    </div>
  );
};

export default SchoolUi;
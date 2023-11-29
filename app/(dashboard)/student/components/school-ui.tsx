'use client'

import React from 'react';
import InfoCard from "@/components/info-card";
import TeacherIcon from "@/components/icons/teacher";
import Approved from "@/components/icons/approved";
import Pending from "@/components/icons/pending";
import Declined from "@/components/icons/declined";
import {Button, Card, CardBody, CardHeader, divider, Divider, Pagination} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import Progress from "@/components/progress";
import dynamic from "next/dynamic";
import {CardFooter} from "@nextui-org/card";

const Plot = dynamic(() => import('react-plotly.js') , {
  ssr: false
})


const SchoolUi = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 gap-x-3">
        <Card
          className="col-span-12"
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
                <TableColumn>Student ID</TableColumn>
                <TableColumn>Student Name</TableColumn>
                <TableColumn>Tutor Group</TableColumn>
                <TableColumn>Year Group</TableColumn>
                <TableColumn>Employer</TableColumn>
                <TableColumn>Assignment Progress</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>0001</TableCell>
                  <TableCell>Darlene Robertson</TableCell>
                  <TableCell>Class A</TableCell>
                  <TableCell>Year 10</TableCell>
                  <TableCell>Bank Of America</TableCell>
                  <TableCell><Progress /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
          <CardFooter className="justify-end">
            <Pagination
            showControls
              total={10}
              initialPage={1}
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SchoolUi;
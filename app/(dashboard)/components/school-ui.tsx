import React from 'react';
import InfoCard from "@/components/info-card";
import TeacherIcon from "@/components/icons/teacher";
import Approved from "@/components/icons/approved";
import Pending from "@/components/icons/pending";
import Declined from "@/components/icons/declined";
import {Button} from "@nextui-org/react";

const SchoolUi = () => {
  return (
    <div>
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
    </div>
  );
};

export default SchoolUi;
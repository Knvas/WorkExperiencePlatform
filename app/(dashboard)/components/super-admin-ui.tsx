'use client'

import React from 'react';
import InfoCard from "@/components/info-card";
import TeacherIcon from "@/components/icons/teacher";
import Approved from "@/components/icons/approved";
import Pending from "@/components/icons/pending";
import Declined from "@/components/icons/declined";
import SchoolIcon from "@/components/icons/schools";

const SuperAdminUi = () => {
  return (
    <div className="space-y-5 col-span-6">
      <div className="grid grid-cols-5 gap-x-5">
        <InfoCard
          icon={<SchoolIcon />}
          quantity={34}
          title={'Schools'}
        />

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

      </div>
      
    </div>
  );
};

export default SuperAdminUi;
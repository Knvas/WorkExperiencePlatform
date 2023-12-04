import React from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/react";

const Notifications = () => {
  return (
    <Card
      shadow={'none'}
      className="border px-2">
      <CardHeader className="font-semibold text-sm uppercase">
        Notifications
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="min-h-[300px] overflow-y-scroll">

        </div>
      </CardBody>
    </Card>
  );
};

export default Notifications;
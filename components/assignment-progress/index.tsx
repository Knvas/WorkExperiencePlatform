import React from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/react";

const AssignmentProgress = () => {
  return (
    <Card
      shadow={'none'}
      className="px-3 border">
      <CardHeader className="font-semibold text-sm uppercase">
        Assignment Progress
      </CardHeader>
      <Divider />
      <CardBody>

      </CardBody>
    </Card>
  );
};

export default AssignmentProgress;
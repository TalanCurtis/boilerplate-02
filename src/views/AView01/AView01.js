import React from 'react';
import ATestButtonAxios from '../../componentsExamples/ATestButtonAxios/ATestButtonAxios';
import ATestRedux from '../../componentsExamples/ATestRedux/ATestRedux';
import ATestRouting from '../../componentsExamples/ATestRouting/ATestRouting';
import ABasicComp from '../../componentsExamples/ABasicComp/ABasicComp';
import ABasicStatelessComp from '../../componentsExamples/ABasicStatelessComp/ABasicStatelessComp';

function AView01 (props) {
  return (
    <div className="AView01">
       AView01 Comp
       <ABasicStatelessComp />
       <ABasicComp />
       <ATestButtonAxios />
       <ATestRouting />
       <ATestRedux />
    </div>
  )
}

export default AView01;
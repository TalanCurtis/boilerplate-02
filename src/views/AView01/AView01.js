import React from 'react';
import ATestButtonAxios from '../../componentsExamples/ATestButtonAxios/ATestButtonAxios';
import ATestRedux from '../../componentsExamples/ATestRedux/ATestRedux';
import ATestRouting from '../../componentsExamples/ATestRouting/ATestRouting';
import ABasicComp from '../../componentsExamples/ABasicComp/ABasicComp';
import ABasicStatelessComp from '../../componentsExamples/ABasicStatelessComp/ABasicStatelessComp';
import WView01Input from '../../componentsExamples/wrappers/WView01Input/WView01Input';

function AView01 (props) {
  return (
    <div className="AView01">
       AView01 Comp
       <WView01Input />
       <ABasicStatelessComp />
       <ABasicComp />
       <ATestButtonAxios />
       <ATestRouting />
       <ATestRedux />
    </div>
  )
}

export default AView01;
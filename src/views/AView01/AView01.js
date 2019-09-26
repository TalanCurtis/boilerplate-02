import React from 'react';
import ATestButtonAxios from '../../components/ATestButtonAxios/ATestButtonAxios';
import ATestRedux from '../../components/ATestRedux/ATestRedux';
import ATestRouting from '../../components/ATestRouting/ATestRouting';
import ABasicComp from '../../components/ABasicComp/ABasicComp';
import ABasicStatelessComp from '../../components/ABasicStatelessComp/ABasicStatelessComp';

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
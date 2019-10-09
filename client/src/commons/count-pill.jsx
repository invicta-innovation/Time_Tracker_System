import React, { Component } from 'react'

export default class CountPill extends Component {

  

    render() {
      const {circledatas}=this.props;
        return (
            <div className="col-lg-12">
                 <a href="#" class="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-3 text-center text-md-left bg-hover-gradient-primary no-anchor-style">
                    <div className="col-lg-5">
                    <div class="bg-gray-100 roundy px-4 py-2 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">{this.props.title}</div>
                    </div> 

                   {
                     circledatas.map(circledata=>(
                      <div class="flex-grow-1 d-flex align-items-center">
                        <div class="text">
                        <h6 class="mb-0"><div class="icon text-white bg-green"><i class="">{circledata.count}</i></div></h6><span class="text-gray">{circledata.name}</span>
                        </div>
                      </div>
                     ))
                   } 
                 
                 

                  
                  </a>
            </div>
        )
    }
}

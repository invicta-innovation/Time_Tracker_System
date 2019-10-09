import React, { Component } from 'react'

export default class MetricPill extends Component {
    render() {
      
        let colorChange=function(count) {
          
            if (count>12) {
                return (<div class="icon text-white bg-green"><i class="">{count}</i></div>);
            }else if (count>8){
                return (<div class="icon text-white bg-violet"><i class="">{count}</i></div>);
            }else if (count>4){
                return (<div class="icon text-white bg-warning"><i class="">{count}</i></div>);
            }else{
                return (<div class="icon text-white bg-red"><i class="">{count}</i></div>);
            }
          };
        return (
           
             <div class="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div class="flex-grow-1 d-flex align-items-center">
                    <div class="dot mr-3 bg-violet"></div>
                    <div class="text">
                    <h6 class="mb-0">{this.props.title}</h6><span class="text-gray">Total : {this.props.total}</span>
                    </div>
                  </div>
                  {colorChange(this.props.count)}
                </div>
        )
    }
}

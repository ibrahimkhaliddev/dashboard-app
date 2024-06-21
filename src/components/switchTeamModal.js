import React, { useContext } from "react";
import {switchContext} from '../App'
import "../css/switch-model.css";
export default function TeamModal (  )  {
     
    const [isSwitchModalOpen, setisSwitchModalOpen] = useContext(switchContext);
    return (
        <>
            {isSwitchModalOpen ? (
                  <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <div>
                            <b>เปลี่ยนทีม</b>{"\n"}
                            <span>ทีมของคุณ</span>{"\n"}
                          </div>
                          <button
                            className=""
                            type="button" 
                            onClick={() => setisSwitchModalOpen(false)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto switch-model">
                         <ul>
                            <li>
                                <div>
                                  <div>
                                    <img src={require('../img/f-logo.png')}/>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="site-det">
                                      <b>Ink.shop</b><br></br>
                                      <span>www.ink.shop.get.zaviago.com</span>
                                    </div>
                                    <div className="site-det-status">
                                      <span>Active</span>
                                    </div>
                                  </div>
                                 
                                </div>
                            </li>
                          </ul>
                          </div>
                          <div>
                            <hr className="hr-1"></hr>
                          </div>
                          <div className="relative p-6 flex-auto switch-model">
                          <div className="model-section-break">
                            <span>ทีมอื่นๆ</span>
                          </div>
                          <ul className="after-first-site">
                            <li>
                                <div>
                                  <div>
                                    <img src={require('../img/f-logo.png')}/>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="site-det">
                                      <b>Zaviago.co.th</b><br></br>
                                      <span>www.zaviago.co.th</span>
                                    </div>
                                    <div className="site-det-status">
                                      <span>Active</span>
                                    </div>
                                  </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                      <img src={require('../img/f-logo.png')}/>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="site-det">
                                        <b>Ink.shop</b><br></br>
                                        <span>www.ink.shop.get.zaviago.com</span>
                                      </div>
                                      <div className="site-det-status">
                                        <span>Active</span>
                                      </div>
                                    </div>
                                </div>
                            </li>
                          </ul>
                        </div>
                        {/*footer*/}
                      
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}
        </>
    )
}

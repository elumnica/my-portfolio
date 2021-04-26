import React from "react";
import "../css/brief-history.css";

function BriefHistory() {
    return (
        <div className="main-container">
            <div className="brief-history-container">
                <p className="sub-heading">A brief history</p>
                <div className="brief-history-chart-container">
                    <div className="brief-history-chart">
                        <div className="brief-history-detail">
                            <p className="brief-history-text">Freelance</p>
                            <p className="brief-history-sub-text">Engineer</p>
                        </div>
                        <div className="brief-history-year">
                            <p>20 ~ curr.</p>
                        </div>
                    </div>
                    <div className="brief-history-chart-center">
                        <div className="brief-history-chart">
                            <div className="brief-history-detail">
                                <p className="brief-history-text">
                                    Columbia University
                                </p>
                                <p className="brief-history-sub-text">
                                    Web Dev Student
                                </p>
                            </div>
                            <div className="brief-history-year">
                                <p>19 - 20</p>
                            </div>
                        </div>
                        <div className="brief-history-chart">
                            <div className="brief-history-detail">
                                <p className="brief-history-text">
                                    Jack Green Assoc.
                                </p>
                                <p className="brief-history-sub-text">
                                    Electrical Engineer
                                </p>
                            </div>
                            <div className="brief-history-year">
                                <p>19 - 20</p>
                            </div>
                        </div>
                    </div>
                    <div className="brief-history-chart">
                        <div className="brief-history-detail">
                            <p className="brief-history-text">
                                SUNY Buffalo State
                            </p>
                            <p className="brief-history-sub-text">
                                Engineering Student
                            </p>
                        </div>
                        <div className="brief-history-year">
                            <p>14 - 19</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BriefHistory;

import React from 'react';
import { Card, Button, Table, ProgressBar } from 'react-bootstrap';

const Social = () => {
    return (
        <Card>
            <Card.Body>
                <Button variant="link" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
                </Button>
                <h4 className="header-title mt-1 mb-3">Social Media Traffic</h4>

                <Table responsive className="table table-sm table-centered mb-0 font-14">
                    <thead className="table-light">
                        <tr>
                            <th>Network</th>
                            <th>Visits</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Facebook</td>
                            <td>2,288</td>
                            <td>
                                <ProgressBar now={65} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Instagram</td>
                            <td>1,513</td>
                            <td>
                                <ProgressBar now={45} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Twitter</td>
                            <td>769</td>
                            <td>
                                <ProgressBar now={30} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>TikTok</td>
                            <td>120</td>
                            <td>
                                <ProgressBar now={30} style={{ height: '3px' }} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Social;

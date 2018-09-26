import React, { Component } from 'react';

class SettingsPanel extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="settings-container container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="panel">
                            <div className="panel-header">Account Setting</div>
                            <div className="panel-settings">
                                <div className="setting-box">
                                    <label for="name">Full Name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" id="password"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="bio">Bio</label>
                                    <input type="text" name="bio" id="bio"/>
                                </div>
                                    <br className="clearfloat"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="panel">
                            <div className="panel-header">Account Setting</div>
                            <div className="panel-settings">
                                <div className="setting-box">
                                    <label for="name">Full Name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" id="password"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="bio">Bio</label>
                                    <input type="text" name="bio" id="bio"/>
                                </div>
                                    <br className="clearfloat"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="panel">
                            <div className="panel-header">Account Setting</div>
                            <div className="panel-settings">
                                <div className="setting-box">
                                    <label for="name">Full Name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" id="password"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="bio">Bio</label>
                                    <input type="text" name="bio" id="bio"/>
                                </div>
                                    <br className="clearfloat"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="panel">
                            <div className="panel-header">Account Setting</div>
                            <div className="panel-settings">
                                <div className="setting-box">
                                    <label for="name">Full Name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" id="password"/>
                                </div>
                                    <hr className="clearfloat"/>
                                <div className="setting-box">
                                    <label for="bio">Bio</label>
                                    <input type="text" name="bio" id="bio"/>
                                </div>
                                    <br className="clearfloat"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingsPanel;
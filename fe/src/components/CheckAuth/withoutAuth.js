import React from 'react';
import { api } from '../../api/api';
import { Redirect } from 'react-router-dom';

export default function withoutAuth(ComponentToProtect) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            api.checkToken()
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false, redirect: true });
                    } else {
                        throw new Error(res.error);
                    }
                })
                .catch(e => {
                    console.error(e);
                    this.setState({ loading: false, redirect: false });
                });
        }
        render() {
            const { loading, redirect } = this.state;

            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/" />
            }
            return <ComponentToProtect {...this.props} />;
        }
    }
}
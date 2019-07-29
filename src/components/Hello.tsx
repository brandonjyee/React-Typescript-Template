import * as React from 'react';

export interface HelloProps { msg: string; }

const Hello = (props: HelloProps) => <h1>Hello asdf{props.msg}</h1>;

export default Hello;

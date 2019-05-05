import * as React from 'react';

export interface HelloProps { msg: string; }

export const Hello = (props: HelloProps) => <h1>Hello asdf{props.msg}</h1>;

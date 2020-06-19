import * as React from 'react';

//align is for the heading.
interface Props {
}

export default class LeaderPodium extends React.Component<Props> {
  public render() {
    return (
    <div className="padding-auto">
    <div className="first-place">1
        </div>
    <div className="second-place">2
        </div>
    <div className="third-place">3
        </div>
    </div>
    );
  }
}

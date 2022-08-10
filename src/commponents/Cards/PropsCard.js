import React from 'react'
import Card from './Card'

function PropsCard() {
  return (
    <div>
     <Card head="Grow Together" content="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form." image="/images/illustration-grow-together.svg"/>

     <Card head=" Flowing Conversations" content="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." image="/images/illustration-flowing-conversation.svg"/>

     <Card head="Your Users" content="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately." image="/images/illustration-your-users.svg"/>
    </div>
  );
}

export default PropsCard;

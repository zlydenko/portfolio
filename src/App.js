import React, { Component } from "react";
import styled from "styled-components";

import Pattern from "./Pattern";

const P = styled.p`
  margin-top: 0em;
`;

export default class App extends Component {
  constructor() {
    super();
    this.listenScrollEvent.bind(this);
  }

  state = {
    bg: "gold"
  };

  render() {
    return (
      <React.Fragment>
        <Pattern color={this.state.bg} opacity={1}>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sollicitudin, nunc eu sagittis ornare, odio ex rhoncus nulla, in
            vestibulum risus lacus in leo. Donec bibendum a turpis sit amet
            consequat. Quisque ut accumsan mi. In eros leo, luctus at elit id,
            sodales tincidunt nisi. Nam sed turpis purus. Nunc quis justo sit
            amet lorem porta tincidunt. Quisque ultrices eleifend augue et
            tristique. Nullam sit amet erat quis lorem aliquet fringilla quis
            non ligula. Vivamus sagittis, enim dapibus molestie fermentum, neque
            risus maximus erat, a scelerisque velit magna sed sem. Donec id
            metus magna. Aliquam vulputate urna ullamcorper, interdum felis nec,
            dignissim mauris. Duis pretium lacus ut nulla consectetur porta. Nam
            sit amet viverra diam, eget fermentum elit.{" "}
          </P>
          <P>
            Suspendisse purus erat, auctor laoreet diam sed, dictum porta velit.
            Sed condimentum sollicitudin tristique. Maecenas dignissim enim non
            lectus interdum, quis commodo nunc rhoncus. In aliquam vulputate
            metus, eu aliquam ligula placerat vitae. Aenean dignissim id dolor
            nec ornare. Nam nec justo ante. Maecenas posuere ipsum tortor, eget
            tincidunt lorem congue in. Fusce sit amet sem vel arcu interdum
            gravida. Sed vitae interdum lorem. Suspendisse feugiat feugiat
            laoreet. Donec et libero a ipsum maximus condimentum. Morbi sit amet
            ex at turpis molestie tempus id quis erat. Praesent in ultricies
            urna. Ut sodales feugiat placerat. Pellentesque risus sem, consequat
            quis nisl at, commodo mollis dolor. Quisque euismod malesuada neque
            vel lobortis. Etiam elementum ornare quam eget dapibus. Sed
            consectetur mauris sit amet sem pellentesque, viverra consectetur ex
            sagittis. Nulla eget tempus nibh, sit amet molestie augue. Sed orci
            ante, commodo vitae aliquet ut, tempus a urna. Quisque condimentum,
            massa at lacinia sagittis, diam ante facilisis metus, non congue
            diam augue vitae erat. Aliquam libero nisi, aliquam sed semper id,
            suscipit quis nisl. Ut maximus odio eros, eu bibendum eros tristique
            iaculis. Nunc porta porta molestie. In velit mi, tristique at
            blandit ac, commodo quis sapien. Nulla a congue justo. Curabitur est
            ex, ultrices vitae sem at, interdum placerat diam. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Quisque non mattis eros, in semper nibh. Praesent
            cursus, orci non ornare dictum, nunc ligula interdum est, quis
            tristique risus neque nec mauris. Curabitur commodo lorem nec urna
            suscipit tristique. Pellentesque tempus ligula sed convallis
            elementum. Quisque finibus, turpis nec vestibulum semper, metus nisl
            ornare nisl, in tincidunt felis ante eu magna. Etiam ut quam
            feugiat, dapibus arcu ac, venenatis felis. Fusce quis metus quis
            urna venenatis tincidunt. Pellentesque iaculis et ligula ut
            ullamcorper. Mauris egestas lobortis finibus. Maecenas sodales elit
            sit amet ipsum maximus ullamcorper. Maecenas dolor urna, tempor ut
            lobortis in, interdum id nisl. Integer suscipit orci non ipsum
            pellentesque, a cursus ligula elementum. Nam eget nisi hendrerit
            ipsum eleifend semper. Quisque lectus tortor, malesuada vel eleifend
            molestie, lobortis nec tellus. Aenean sit amet nisi sed est
            hendrerit vulputate eget vitae enim. Vestibulum ante lorem, dictum
            consequat interdum vel, pulvinar ac dui. Nam eu nibh congue,
            pellentesque elit id, sodales mauris. Aenean in ultrices ante. Nunc
            egestas nisi eu nisi vehicula, id vulputate mauris fringilla.
            Praesent non posuere elit. Cras magna nibh, euismod sed tincidunt
            ac, ultricies non orci. Quisque luctus, sem vitae tempor porttitor,
            risus nisi auctor enim, ut blandit metus libero quis felis. Vivamus
            quis arcu quis magna maximus porttitor. Nunc in venenatis sapien.
            Cras tellus nisi, congue vehicula lorem et, pretium pulvinar erat.
            Nullam sollicitudin faucibus nulla condimentum tempor. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Suspendisse sed sapien nisl. Donec tincidunt
            ultrices facilisis. Suspendisse vel est lobortis, imperdiet leo
            dapibus, pulvinar enim. Aliquam nec neque erat. Cras feugiat viverra
            ligula, vitae aliquam mi rutrum volutpat. In vel semper augue.
            Quisque venenatis congue leo, id congue ligula facilisis at. Mauris
            in nunc blandit, sodales lectus nec, blandit felis. Aenean malesuada
            enim eu luctus placerat. Praesent lacinia nunc ac commodo pulvinar.
            Sed tristique a quam a eleifend. Fusce neque eros, tincidunt ut
            molestie sit amet, tristique a mi. Fusce ac nunc tortor. Suspendisse
            potenti. Ut placerat libero nisl, at suscipit augue dignissim eu.
            Cras aliquam neque sagittis felis dictum, at scelerisque ex aliquet.
            Etiam condimentum cursus purus nec varius. Aenean nec enim malesuada
            leo malesuada tempus. Phasellus consequat semper risus a egestas.
            Aliquam lacinia massa erat, quis elementum lorem sollicitudin in. Ut
            eros dolor, posuere sit amet erat ut, semper maximus enim. Cras
            iaculis vehicula dapibus. Sed suscipit volutpat velit, id porta erat
            finibus at. Integer luctus mattis eros, nec maximus leo sagittis ut.
            Pellentesque mollis elementum cursus. Maecenas pellentesque dui sed
            purus pretium pharetra. Nullam quis rhoncus orci. Donec ultrices
            arcu non sem porttitor, varius elementum nunc facilisis. Sed
            consectetur feugiat mollis. Praesent eget odio non urna consectetur
            eleifend vitae a mi. Maecenas interdum orci ligula, in placerat
            felis euismod sit amet. Nunc consequat consectetur nisl id
            porttitor. Nullam in erat id odio ornare lobortis quis in odio.
            Mauris finibus nisl sem, tincidunt varius justo condimentum et.
            Quisque varius enim vel odio convallis, nec dictum urna faucibus.
            Proin ac mi vel neque blandit venenatis feugiat sit amet neque.
            Proin auctor varius quam. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Sed scelerisque diam
            sed erat tempus viverra. Duis id dolor eget mauris ultrices
            tristique ut at libero. Nam porttitor est vitae erat mattis, vitae
            sagittis metus aliquet. Donec lacinia neque a posuere dapibus.
            Praesent faucibus maximus sapien vulputate luctus. Quisque nisi
            ipsum, tempor at euismod fringilla, dictum eu libero. Ut semper
            porta tincidunt. Nunc pulvinar hendrerit elit, vitae facilisis ipsum
            tempor finibus. Proin in aliquet quam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In ut risus at quam luctus vehicula.
            Suspendisse commodo ligula vel purus efficitur luctus. Aliquam
            tincidunt lacinia aliquam. Suspendisse eu venenatis leo. Praesent
            convallis efficitur augue, sed porttitor sem dictum sit amet. Aenean
            ornare non magna id porta. Curabitur lacinia tristique leo in
            pharetra. Etiam placerat, odio a rhoncus euismod, nulla quam
            vestibulum ante, et auctor justo nulla posuere nunc. Duis venenatis
            volutpat dui. Etiam ut magna quis libero imperdiet vulputate. Etiam
            at lorem et neque finibus rutrum. Nulla aliquam orci id diam
            commodo, ut posuere ipsum luctus.
          </P>
        </Pattern>
      </React.Fragment>
    );
  }
}

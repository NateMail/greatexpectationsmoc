import React from "react";
import defaultAbout from "../photos/about/defaultAbout.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__heading">About</h1>

      <img src={defaultAbout} alt="dog" className="about__pic" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium
        dui in risus facilisis lacinia. Maecenas convallis lectus eu tincidunt
        pellentesque. Fusce quis sem viverra ex dictum placerat quis ut felis.
        Praesent ac porttitor turpis. Fusce at porta felis, in pellentesque
        ante. Duis condimentum quam viverra mi auctor lacinia. Nunc libero orci,
        molestie id pulvinar non, iaculis quis ante. Suspendisse nunc enim,
        imperdiet nec massa non, scelerisque porttitor enim. Proin in nisi sed
        ligula pulvinar mattis a suscipit nibh. Aliquam nec aliquet mauris. Nam
        justo lacus, luctus et leo sit amet, rutrum congue mi. Donec fermentum
        turpis sed felis efficitur venenatis. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Suspendisse pulvinar augue elit. Vestibulum condimentum justo lectus, id
        mollis eros gravida in. Integer malesuada nunc id odio accumsan, id
        fringilla urna varius. Donec fringilla tristique condimentum. Fusce
        consequat sit amet augue ac aliquet. Vivamus non sollicitudin sapien.
        Donec imperdiet leo at dapibus condimentum. Vivamus dapibus viverra
        felis, ut condimentum libero. Donec fringilla ac odio sed rhoncus.
        Aliquam erat volutpat. Vivamus nisi leo, scelerisque et elit vel, mattis
        eleifend risus. Quisque et tempor ante. Maecenas blandit non est sit
        amet vulputate. Suspendisse tempus feugiat purus sed imperdiet. Cras
        felis tellus, feugiat ac convallis nec, congue vel massa. Aliquam
        sollicitudin iaculis blandit. Nulla est felis, posuere quis elementum
        et, condimentum sed risus. Morbi ut feugiat elit. Duis pharetra orci sit
        amet felis bibendum, et malesuada ipsum tincidunt. Nullam ut dolor
        faucibus, egestas mauris ac, lacinia arcu. Etiam ultricies egestas
        risus, sit amet fermentum justo suscipit ac. Curabitur purus turpis,
        rutrum in tempor vitae, imperdiet sed orci. Sed vel mi et nulla pretium
        tincidunt. Mauris blandit accumsan nisl, sit amet varius mauris
        ultricies fermentum. Proin vestibulum tristique tempor. Fusce urna odio,
        laoreet id urna vel, sollicitudin volutpat ex. Fusce vel diam ac nibh
        laoreet tempus. Nunc tristique risus non faucibus imperdiet. In vel elit
        quis nisi maximus laoreet vitae eu nibh. Aenean cursus sollicitudin
        accumsan. Sed sagittis est sit amet sem scelerisque vehicula ut at erat.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed quis rutrum urna. Suspendisse in lectus nec mi
        tristique aliquam non non leo. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam condimentum risus vel
        mauris hendrerit vulputate sit amet ut lectus. Duis sagittis, justo vel
        accumsan dignissim, nisl libero gravida felis, vel iaculis diam risus id
        leo.
      </p>
    </div>
  );
};

export default About;

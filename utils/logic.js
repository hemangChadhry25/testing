// useEffect(() => {
let coordinated = [];
if (temp.length > 0) {
  let elements = [];
}

if (temp2.length > 0) {
  let elements = [];
  for (let i = 0; i < temp2.length; i++) {
    elements[i] = document.getElementById(`re${i + 1}`);
    const { left, top, width } = elements[i].getBoundingClientRect();
    const topCenterX = left + width / 2;
    const topCenterY = top;
    // createMarker2(topCenterX, topCenterY);

    // calculate here the bottom points of above row

    for (let i = 0; i < temp.length; i++) {
      elements[i] = document.getElementById(`ref${i + 1}`);
      const { left, top, width, height } = elements[i].getBoundingClientRect();
      const bottomCenterX = left + width / 2;
      const bottomCenterY = top + height;
      // createMarker1(bottomCenterX, bottomCenterY);
      coordinated.push({ x: bottomCenterX, y: bottomCenterY });
      // createCurvedLine(
      //   { x: bottomCenterX, y: bottomCenterY },
      //   { x: topCenterX, y: topCenterY }
      // );
      const angle = Math.atan2(
        topCenterY - bottomCenterY,
        topCenterX - bottomCenterX
      );
      const distance = Math.sqrt(
        Math.pow(topCenterX - bottomCenterX, 2) +
          Math.pow(topCenterY - bottomCenterY, 2)
      );
      const line = document.createElement("div");
      line.className = "absolute h-[1px] origin-left bg-black";
      line.style.width = `${distance}px`;
      line.style.transform = `rotate(${angle}rad)`;
      line.style.left = `${bottomCenterX}px`;
      line.style.top = `${bottomCenterY}px`;
      document.body.appendChild(line);
    }
  }
}
// }, [temp, temp2]);

const workflow = {
  workflow_id: "123456",
  workflow_version: "1.0",
  trigger_type: "webhook",
  trigger_id: "789012",
  source_system: "systemA",
  source_user: "userA",
  source: {
    type: "api",
    name: "API A",
    version: "1.0",
    description: "API A description",
    environment_variables: {
      env1: "value1",
      env2: "value2",
    },
  },
  trigger_settings: {
    trigger_type: "webhook",
    trigger_source: "appA",
    trigger_data: {
      data1: "value1",
      data2: "value2",
    },
    trigger_conditions: {
      condition1: "value1",
      condition2: "value2",
    },
    trigger_frequency: "daily",
    trigger_options: {
      timeout: 10,
      retry: 3,
      error_handling: "fail",
    },
    integration_settings: {
      auth_key: "key1",
      endpoint: "http://api.example.com",
      config_option: "value",
    },
  },
};

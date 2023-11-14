// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopRunRequest, StopRunResult } from "../models/models_0";
import { de_StopRunCommand, se_StopRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopRunCommand}.
 */
export interface StopRunCommandInput extends StopRunRequest {}
/**
 * @public
 *
 * The output of {@link StopRunCommand}.
 */
export interface StopRunCommandOutput extends StopRunResult, __MetadataBearer {}

/**
 * @public
 * <p>Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
 *             where tests have not started. You are not billed for these devices. On devices where tests have started
 *             executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
 *             setup, teardown, and any tests that were in progress or already completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // StopRunRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new StopRunCommand(input);
 * const response = await client.send(command);
 * // { // StopRunResult
 * //   run: { // Run
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY",
 * //     platform: "ANDROID" || "IOS",
 * //     created: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //     result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //     started: new Date("TIMESTAMP"),
 * //     stopped: new Date("TIMESTAMP"),
 * //     counters: { // Counters
 * //       total: Number("int"),
 * //       passed: Number("int"),
 * //       failed: Number("int"),
 * //       warned: Number("int"),
 * //       errored: Number("int"),
 * //       stopped: Number("int"),
 * //       skipped: Number("int"),
 * //     },
 * //     message: "STRING_VALUE",
 * //     totalJobs: Number("int"),
 * //     completedJobs: Number("int"),
 * //     billingMethod: "METERED" || "UNMETERED",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //     networkProfile: { // NetworkProfile
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "CURATED" || "PRIVATE",
 * //       uplinkBandwidthBits: Number("long"),
 * //       downlinkBandwidthBits: Number("long"),
 * //       uplinkDelayMs: Number("long"),
 * //       downlinkDelayMs: Number("long"),
 * //       uplinkJitterMs: Number("long"),
 * //       downlinkJitterMs: Number("long"),
 * //       uplinkLossPercent: Number("int"),
 * //       downlinkLossPercent: Number("int"),
 * //     },
 * //     parsingResultUrl: "STRING_VALUE",
 * //     resultCode: "PARSING_FAILED" || "VPC_ENDPOINT_SETUP_FAILED",
 * //     seed: Number("int"),
 * //     appUpload: "STRING_VALUE",
 * //     eventCount: Number("int"),
 * //     jobTimeoutMinutes: Number("int"),
 * //     devicePoolArn: "STRING_VALUE",
 * //     locale: "STRING_VALUE",
 * //     radios: { // Radios
 * //       wifi: true || false,
 * //       bluetooth: true || false,
 * //       nfc: true || false,
 * //       gps: true || false,
 * //     },
 * //     location: { // Location
 * //       latitude: Number("double"), // required
 * //       longitude: Number("double"), // required
 * //     },
 * //     customerArtifactPaths: { // CustomerArtifactPaths
 * //       iosPaths: [ // IosPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       androidPaths: [ // AndroidPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       deviceHostPaths: [ // DeviceHostPaths
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     webUrl: "STRING_VALUE",
 * //     skipAppResign: true || false,
 * //     testSpecArn: "STRING_VALUE",
 * //     deviceSelectionResult: { // DeviceSelectionResult
 * //       filters: [ // DeviceFilters
 * //         { // DeviceFilter
 * //           attribute: "ARN" || "PLATFORM" || "OS_VERSION" || "MODEL" || "AVAILABILITY" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE", // required
 * //           operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS", // required
 * //           values: [ // DeviceFilterValues // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       matchedDevicesCount: Number("int"),
 * //       maxDevices: Number("int"),
 * //     },
 * //     vpcConfig: { // VpcConfig
 * //       securityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // VpcSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StopRunCommandInput - {@link StopRunCommandInput}
 * @returns {@link StopRunCommandOutput}
 * @see {@link StopRunCommandInput} for command's `input` shape.
 * @see {@link StopRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To stop a test run
 * ```javascript
 * // The following example stops a specific test run.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:EXAMPLE-GUID-123-456"
 * };
 * const command = new StopRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "run": {}
 * }
 * *\/
 * // example id: to-stop-a-test-run-1472653770340
 * ```
 *
 */
export class StopRunCommand extends $Command<
  StopRunCommandInput,
  StopRunCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StopRunCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopRunCommandInput, StopRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "StopRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "StopRun",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StopRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRunCommandOutput> {
    return de_StopRunCommand(output, context);
  }
}

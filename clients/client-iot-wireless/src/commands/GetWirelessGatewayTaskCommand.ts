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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayTaskRequest, GetWirelessGatewayTaskResponse } from "../models/models_0";
import { de_GetWirelessGatewayTaskCommand, se_GetWirelessGatewayTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayTaskCommand}.
 */
export interface GetWirelessGatewayTaskCommandInput extends GetWirelessGatewayTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayTaskCommand}.
 */
export interface GetWirelessGatewayTaskCommandOutput extends GetWirelessGatewayTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a wireless gateway task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayTaskResponse
 * //   WirelessGatewayId: "STRING_VALUE",
 * //   WirelessGatewayTaskDefinitionId: "STRING_VALUE",
 * //   LastUplinkReceivedAt: "STRING_VALUE",
 * //   TaskCreatedAt: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "FIRST_RETRY" || "SECOND_RETRY" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayTaskCommandInput - {@link GetWirelessGatewayTaskCommandInput}
 * @returns {@link GetWirelessGatewayTaskCommandOutput}
 * @see {@link GetWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetWirelessGatewayTaskCommand extends $Command<
  GetWirelessGatewayTaskCommandInput,
  GetWirelessGatewayTaskCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: GetWirelessGatewayTaskCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWirelessGatewayTaskCommandInput, GetWirelessGatewayTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWirelessGatewayTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetWirelessGatewayTask",
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
  private serialize(input: GetWirelessGatewayTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWirelessGatewayTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWirelessGatewayTaskCommandOutput> {
    return de_GetWirelessGatewayTaskCommand(output, context);
  }
}
